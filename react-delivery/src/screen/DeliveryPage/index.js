import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

//=============== Page Individual =============//
import DeviPage from './DeviPage/';

export default function DeliveryPage() {
  useEffect(() => {
    topFunction();
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  return (
    <div>
      <Switch>
        <Route path="/d/:slug" component={DeviPage} />
      </Switch>
    </div>
  );
}
