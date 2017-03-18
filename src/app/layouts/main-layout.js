import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store';
import * as types from '../actions/action-types';
import {setMenuState} from '../actions/set-menustate-actions';
import Title from '../sections/title';
import Hamburger from '../sections/hamburger';
import NavBar from '../sections/navbar';

import Home from '../components/home';
import Code from '../components/code';
import Profile from '../components/profile';
import Contact from '../components/contact';
import NotFound from '../components/notfound';

class MainLayout extends React.Component {
    toggleMenu() {
        store.dispatch(setMenuState(this.props.visible ? types.MENU_HIDE : types.MENU_SHOW));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Route path="/" component={Home}/>
                        <Route path="code" component={Code}/>
                        <Route path="aboutme" component={Profile}/>
                        <Route path="contact" component={Contact}/>
                        <Route path="*" component={NotFound}/>
                    </div>
                    <div className="genHeader">
                        <Title/>
                        <Hamburger onClick={() => this.toggleMenu()}/>
                    </div>
                    <NavBar visible={this.props.visible} onClose={() => this.toggleMenu()}/>
                </div>
            </BrowserRouter>
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
