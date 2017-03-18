import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from './layouts/main-layout';

export default (
    <BrowserRouter>
        <Route component={MainLayout}>
        </Route>
    </BrowserRouter>
);
