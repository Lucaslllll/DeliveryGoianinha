import React from 'react';

import RegisterRestaurant from './RegisterRestaurant';

import { Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';


export default function Dashboard() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/admin/register/restaurant" exact component={RegisterRestaurant} />
      </Switch>
    </>
  );
}
