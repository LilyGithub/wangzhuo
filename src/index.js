import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import {routers} from 'routers';
import './style.less';
render(
    (
    <Router >
        {
            routers.map((item,index)=>
                <Route key={index} exact path={item.route} component={item.component}></Route>)
        }
    </Router>),
    document.getElementById('app')
);