import React from 'react';

import Main from '../screen/main';
import LoginScreen from '../screen/Login';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/Home" component={Main} />
        <Route path="/" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
)
}

export default Routes;
