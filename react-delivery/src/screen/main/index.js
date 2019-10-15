import React, { useState } from 'react';

import './styles.css';

import Home from '../Home';

import CardPizza from '../CardPizza';
import CardAcai from '../CardAcai';
import Request from '../Request';
import DeviPage from '../DeviPage';
import Dashboard from '../Dashboard';
import { Switch, Route } from 'react-router-dom';


function Main() {
  return(
    <div className="container__main">
      <div className="containerMain">
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/d/:slug" exact component={DeviPage} />
          <Route path="/Home/Pizza" exact component={CardPizza} />
          <Route path="/Home/Acai" exact component={CardAcai} />
          <Route path="/Home/Request" exact component={Request} />
        </Switch>
      </div>
    </div>
  )
}

export default Main;