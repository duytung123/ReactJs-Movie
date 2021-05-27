import React from 'react';
import './App.css';
import RoutingUrl from '../RoutingUrl/RoutingUrl';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Redirect, useParams } from "react-router-dom";
import SimpleSlider from '../untils/utils';


function App() {

  return (

    <div>
      <RoutingUrl />

      {/* <BrowserRouter>
      
      <Switch>
      <UnauthenticatedRoute
          path="/login"
          component={LoginForm}
          appProps={{ isAuthenticated }}
        />
        <AuthenticatedRoute
          path="/"
          component={Hero}
          appProps={{ isAuthenticated }}
        />
       
      </Switch>
      </BrowserRouter> */}
    </div>

  );
}

export default App;
