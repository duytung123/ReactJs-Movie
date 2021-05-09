import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Redirect, useParams } from "react-router-dom";
import DetailsMovie from '../DetailsMovie/DetailsMovie';

import Hero from '../Hero-section/Hero';
import LatestMovie from '../LatestMovie-section/LatestMovie';
import LoginForm from '../Login/Login';

import Navheader from '../Nav-header/nav';
import NotFound from '../NotFound/Notfound';

import TotalSection from '../TotalSection/TotalSection';


class RoutingUrl extends Component {

    render() {
        //const isAuthenticated = this.props.isAuthenticated;
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
                        <Route exact path='/login' render={(props) => <LoginForm {...props} />} />
                        <Route exact path="/detailsMovie/:id" component={DetailsMovie} />
                        <Route component={NotFound} />
                    </Switch>
                    <Router />
                </BrowserRouter>
            </div >


        );
    }


}

export default RoutingUrl;