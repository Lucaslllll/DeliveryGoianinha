import React, {useEffect} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Button, SocialIcon} from 'react-native-elements';

import {getData} from '../../../services/AsyncStorage';

import wallpaper from '../../../assets/img/pizza.jpg';

import styles from './styles';

export default function main({navigation}) {
  useEffect(() => {
    handleIsLogin();
  }, []);

  async function handleIsLogin(){
    if(await getData() !== null){
      navigation.navigate('beforeMain');
    }
  }
  function handleRegister() {
    navigation.navigate('Email');
  }

  return (
    <View style={styles.container}>
      <Image 
        resizeMode='contain'
        style={styles.wallpaper} 
        source={wallpaper} 
      />
      <Text style={styles.titleLogin}>Falta pouco para matar sua fome!</Text>
      <Text style={styles.forget}>
        Como deseja continuar?
      </Text>
      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle}
        title="E-mail"
        titleStyle={styles.titleButton}
        onPress={handleRegister}
      />
      {/* <SocialIcon
        title="Entre com o Facebook"
        button
        type="facebook"
        style={styles.buttonSocial}
      />
      <SocialIcon
        title="Entre com o Google"
        button
        type="google"
        iconColor="black"
        fontStyle={{color: '#000'}}
        style={styles.buttonSocialGoogle}
      /> */}
    </View>
  );
}
main.navigationOptions = {
  header: null,
};
