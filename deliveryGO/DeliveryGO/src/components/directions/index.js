import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

export default function directions({destination, origin, onReady}) {
  return (
    <MapViewDirections 
      destination={destination}
      origin={origin}
      onReady={onReady}
      apike="AIzaSyB4CnwhCHJpcBGuWuRMFNyv0pQIIiJTHyc"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
