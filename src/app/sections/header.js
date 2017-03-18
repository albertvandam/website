import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import * as types from '../actions/action-types';
import {setMenuState} from '../actions/set-menustate-actions';
import Title from './title';
import Hamburger from './hamburger';
import NavBar from './navbar';

class Header extends React.Component {
    toggleMenu() {
        store.dispatch(setMenuState(this.props.visible ? types.MENU_HIDE : types.MENU_SHOW));
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps)(Header);

window.onresize = function () {
    if (window.innerWidth < 640) {
        store.dispatch(setMenuState(types.MENU_HIDE));
    } else {
        store.dispatch(setMenuState(types.MENU_SHOW));
    }
};
