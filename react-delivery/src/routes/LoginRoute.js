import React from 'react';

import {Route, Switch, Redirect} from "react-router-dom";
import { isAuthenticated } from "../services/auth";


export const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/Home", state: { from: props.location } }} />
      ) : (
          <Component {...props} />  
      )
    }
  />
);

export default LoginRoute;
