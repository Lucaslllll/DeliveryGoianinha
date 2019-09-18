import React, { useState } from 'react';

import './styles.css';

import BeforeMain from '../beforeMain';
import CardPizza from '../CardPizza';
import CardAcai from '../CardAcai';
import Request from '../Request';
import Footer from '../../components/footer';
import { Switch, Route } from 'react-router-dom';


function Main() {
  return(
    <div className="container__main">
      <div className="containerMain">
        <Switch>
          <Route path="/Home" exact component={BeforeMain} />
          <Route path="/Home/Pizza" component={CardPizza} />
          <Route path="/Home/Acai" component={CardAcai} />
          <Route path="/Home/Request" component={Request} />
        </Switch>
      </div>
    </div>
  )
}

export default Main;