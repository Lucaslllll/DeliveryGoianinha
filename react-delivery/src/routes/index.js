import React from 'react';

import Home from '../screen/Home';
import LoginScreen from '../screen/Login';

import {Route, Switch} from "react-router-dom";
import LoginRoute from './LoginRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
    <>
      <Switch>
        <LoginRoute exact path="/" component={LoginScreen} />
        <LoginRoute exact path="/Login" component={LoginScreen} />
        <LoginRoute path="/Register" component={LoginScreen} />
        <PrivateRoute path="/Home" component={Home} />
        <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
      </Switch>
    </>

)

export default Routes;
