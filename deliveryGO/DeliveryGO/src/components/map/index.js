import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import { Dimensions, PermissionsAndroid, Alert } from 'react-native';

import Geolocation from '@react-native-community/geolocation';



export default function Map({isLocation, latitude, longitude}) {
  const [region, setRegion] = useState({});
  const [isMap, setIsMap] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);


  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Localização',
          message:
            'O aplicativo precisa acessar sua localização atual.',
          buttonNeutral: 'Lembre-me depois',
          buttonPositive: 'Certo',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  function getLocation(){
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0093,
        })
        setIsMap(true);
      },  
      error => Alert.alert('Localização', 'Por favor, ative o seu GPS.'),
      {
        enableHighAccuracy: true, 
        timeout: 20000, 
        maximumAge: 0,
      }
    );
  }


  function onRegionChange(region) {
    setRegion({ region });
  }

  return (
    <View style={{flex: 1, width: Dimensions.get('window').width}}>
      { 
        isMap ?
        <MapView
            style={{flex: 1}}
            initialRegion={region}
            onRegionChange={onRegionChange}
            loadingEnabled
        >
        { 
          isLocation
          ?
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude
            }}
            title='SUA LOCALIZAÇÃO ATUAL'
            description='O pedido será entregue nesse endereço.'
          />
            :
            <></>
        }  
      </MapView>
      :
      <></>  
      }
    </View>
  );
}
