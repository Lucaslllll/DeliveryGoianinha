import React,{ useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

import MapGL, {GeolocateControl, Marker } from 'react-map-gl';
// import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css';

const TOKEN="pk.eyJ1IjoiamVmZmVzc29uIiwiYSI6ImNrMTJxY2h6ejAxaDEzaHJzb2FnZWh0cW8ifQ.F9TtrJNh4oWMad4FuFoOxg";

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Maps = (props) => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: "100%",
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: 15
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 10 })
  
  return (
    <div style={{ margin: '0 auto'}} className="containerMap">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
        <Marker key={`marker-1`} longitude={props.longitude} latitude={props.latitude}>
          <FaMapMarkerAlt />
        </Marker>
      </MapGL>
    </div>
  )
}

export default Maps;