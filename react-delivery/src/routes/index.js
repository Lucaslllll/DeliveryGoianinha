import React from 'react';

import LoginScreen from '../screen/Login';


//=================== Main ===================//
import main from '../screen/main/';

//============== Page Individual =============//
import DeliveryPage from '../screen/DeliveryPage/'; 

import {Route, Switch} from "react-router-dom";
import LoginRoute from './LoginRoute';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../screen/Dashboard';

const Routes = () => (
    <>
      <Switch>
        <LoginRoute exact path="/" component={LoginScreen} />
        <LoginRoute exact path="/Login" component={LoginScreen} />
        <LoginRoute path="/Register" component={LoginScreen} />
        <PrivateRoute path="/Home" component={main} />
        <PrivateRoute path="/d/" component={DeliveryPage} />
        <PrivateRoute path="/admin/" component={Dashboard} />
        <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
      </Switch>
    </>

)

export default Routes;
