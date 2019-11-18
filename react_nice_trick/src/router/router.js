import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import Swiper from '../pages/swiper'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/swiper" component={Swiper}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;