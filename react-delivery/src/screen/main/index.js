import React, { useState } from 'react';

import Card from '../../components/Card';

import './styles.css';

import Footer from '../../components/footer';
import { Spinner } from 'reactstrap';

function Main() {
  const [Spinnerr, setSpinner] = useState(false);

  return(
    <>
    <div className="containerMain">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <div className="spinner" onClick={() => setSpinner(!Spinnerr)}>
        { 
          Spinnerr
          ?
          <Spinner color="dark" />
          :
          <p>Opa, é o fim!</p>
        }
      </div>

    </div>
    <div className="footerMain">
      <Footer />
    </div>
    </>
  )
}

export default Main;