import React from 'react';

import './styles.css';

import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
  return (
    <>
      <Map
          google={props.google}
          zoom={15}
          initialCenter={{ lat: -6.281602, lng: -35.196313}}
        />
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4CnwhCHJpcBGuWuRMFNyv0pQIIiJTHyc'
})(MapContainer);