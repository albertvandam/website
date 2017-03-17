import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainLayout from './layouts/main-layout';
import Home from './components/home';
import Code from './components/code';
import Profile from './components/profile';
import Contact from './components/contact';
import NotFound from './components/notfound';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/"  component={Home} />
            <Route path="code" component={Code} />
            <Route path="aboutme" component={Profile}/>
            <Route path="contact" component={Contact}/>

            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);
