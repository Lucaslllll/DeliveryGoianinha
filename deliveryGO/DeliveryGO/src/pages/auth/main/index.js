import React, {useEffect} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {Button, SocialIcon} from 'react-native-elements';

import {getData} from '../../../services/AsyncStorage';

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
  function handleLogin() {
    navigation.navigate('Login');
  }
  function handleRegister() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleLogin}>Crie sua conta de graça</Text>
      <Text style={styles.forget}>
        Faça sua conta para poder acessar todas as lanchonetes da sua região!
      </Text>
      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle}
        title="Cadastre-se"
        titleStyle={styles.titleButton}
        onPress={handleRegister}
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.forget}>Tenho uma conta</Text>
      </TouchableOpacity>
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
