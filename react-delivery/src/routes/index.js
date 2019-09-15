import React from 'react';

import Home from '../screen/Home';
import LoginScreen from '../screen/Login';

import {Route, Switch, Redirect} from "react-router-dom";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/Login" component={LoginScreen} />
        <Route path="/Register" component={LoginScreen} />
        <Route path="/Home" component={Home} />
        <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
      </Switch>
    </>

)

export default Routes;
