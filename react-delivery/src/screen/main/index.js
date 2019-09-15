import React, { useState } from 'react';

import './styles.css';

import BeforeMain from '../beforeMain';
import CardPizza from '../CardPizza';
import CardAcai from '../CardAcai';
import Request from '../Request';
import Footer from '../../components/footer';

import { Spinner } from 'reactstrap';

import { Switch, Route } from 'react-router-dom';


function Main() {
  const [Spinnerr, setSpinner] = useState(false);

  return(
    <div className="container__main">
      {/* <div className="containerTitleMain">
        <h2 className="containerTitleMain__title">Cardápio</h2>
      </div> */}
      <div className="containerMain">
        <Switch>
          <Route path="/Home" exact component={BeforeMain} />
          <Route path="/Home/Pizza" component={CardPizza} />
          <Route path="/Home/Acai" component={CardAcai} />
          <Route path="/Home/Request" component={Request} />
        </Switch>
        {/* <div className="spinner" onClick={() => setSpinner(!Spinnerr)}>
          { 
            Spinnerr
            ?
            <Spinner color="dark" />
            :
            <p>Opa, é o fim!</p>
          }
        </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Main;