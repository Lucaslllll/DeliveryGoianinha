import React, {useEffect, useState} from 'react';
import { 
  SafeAreaView, 
  View, 
  Text,
  PermissionsAndroid, 
  Alert
  } from 'react-native';


import Map from '../../../components/map';

// Importing geolocation
import Geolocation from '@react-native-community/geolocation';



export default function Location({navigation}) {
  const [isLocation, setIsLocation] = useState(false); 
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  useEffect(() => {
    requestLocationPermission();
  }, [])

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


  function handleAccount(){
    navigation.navigate('Account');
  }

  function getLocation(){
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setLatitude(latitude);
        setLongitude(longitude);
        setIsLocation(true);
      },  
      error => {
        Alert.alert('Localização', 'Por favor, ative o seu GPS para prosseguir!',
        [
          {text: 'OK', onPress: () => handleAccount()},
        ]
        );
      },
      {
        enableHighAccuracy: true, 
        timeout: 20000, 
        maximumAge: 1000,
      }
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>
          O pedido será enviado para o seu endereço atual.
        </Text>
      </View>
      <Map 
        isLocation={isLocation}
        latitude={latitude}
        longitude={longitude}
      />
    </SafeAreaView>
  );
}
