import React from 'react';

import './styles.css';

import Home from './Home';

import { Switch, Route } from 'react-router-dom';


function Main() {
  return(
    <div className="container__main">
      <div className="containerMain">
        <Switch>
          <Route path="/Home" exact component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default Main;