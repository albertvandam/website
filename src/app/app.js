import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
//import router from './router';
//import MainLayout from './layouts/main-layout';

import Header from './sections/header';
import Home from './components/home';
import Code from './components/code';
import Profile from './components/profile';
import Contact from './components/contact';
import NotFound from './components/notfound';

import siteConfig from '../config/global';
require('es6-promise').polyfill();

// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/code" component={Code}/>
                    <Route path="/aboutme" component={Profile}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={NotFound}/>
                </Switch>
                <Header/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src   = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', siteConfig.analytics, 'auto');
ga('send', 'pageview');
