import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Input, Button, SocialIcon } from 'react-native-elements';

import styles from './styles';

const BeforeLogin = () => (
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
      />

    <TouchableOpacity>
      <Text style={styles.forget}>
        Tenho uma conta
      </Text>
    </TouchableOpacity>
    <SocialIcon
    title='Entre com o Facebook'
    button
    type='facebook'
    style={styles.buttonSocial}
    />
    <SocialIcon
    title='Entre com o Google'
    button
    type='google'
    iconStyle={{color: '#000'}}
    fontStyle={{color: '#000'}}
    style={styles.buttonSocialGoogle}
    />

  </View>
);


BeforeLogin.navigationOptions = {
  header: null,
}


export default BeforeLogin;