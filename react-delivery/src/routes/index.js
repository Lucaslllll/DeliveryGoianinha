import React from 'react';

import Main from '../screen/main';
import LoginScreen from '../screen/Login';

import {Route, Switch, Redirect} from "react-router-dom";

function Routes() {

  return(
    <>
      <Switch>
        <Route path="/Home" component={Main} />
        <Route path="/" component={LoginScreen} />
      </Switch>
    </>

      )
}

export default Routes;
