import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import DetailsMovie from '../DetailsMovie/DetailsMovie';
import Hero from '../Hero-section/Hero';
import LatestMovie from '../LatestMovie-section/LatestMovie';
import LoginForm from '../Login/Login';
import Navheader from '../Nav-header/nav';
import NotFound from '../NotFound/Notfound';
import TotalSection from '../TotalSection/TotalSection';
import utils from '../untils/utils';


function RoutingUrl(props) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return (
        <div>

            <BrowserRouter>
                <Router />
                <Route exact path="/" >
                    <Navheader />
                    <Hero />
                    <LatestMovie />
                    <TotalSection />
                </Route>

                <Switch>
                    <Route exact path="/detailsMovie/:id" component={DetailsMovie} />
                    <Route path="/login" render={() => (isAuthenticated ? (<Redirect to="/" />) : (<LoginForm />))} />
                    <Route exact path="/test" component={utils} />

                </Switch>
                {/* <Route path='*' exact={true} component={NotFound} /> */}
                <Router />
            </BrowserRouter>
        </div >


    );



}

export default RoutingUrl;