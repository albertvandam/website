import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import * as types from '../actions/action-types';
import {setMenuState} from '../actions/set-menustate-actions';
import Title from '../sections/title';
import Hamburger from '../sections/hamburger';
import NavBar from '../sections/navbar';

class MainLayout extends React.Component {
    toggleMenu() {
        store.dispatch(setMenuState(this.props.visible ? types.MENU_HIDE : types.MENU_SHOW));
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                <div className="genHeader">
                    <Title/> <Hamburger onClick={() => this.toggleMenu()}/>
                </div>
                <NavBar visible={this.props.visible} onClose={() => this.toggleMenu()}/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        visible: store.mainMenuState.visible
    };
};

export default connect(mapStateToProps)(MainLayout);

window.onresize = function () {
    if (window.innerWidth < 640) {
        store.dispatch(setMenuState(types.MENU_HIDE));
    } else {
        store.dispatch(setMenuState(types.MENU_SHOW));
    }
};
