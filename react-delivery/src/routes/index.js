import React from 'react';

import Main from '../screen/main';
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
        <PrivateRoute path="/Home" component={Main} />
        <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
      </Switch>
    </>

)

export default Routes;
