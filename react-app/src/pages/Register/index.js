import React from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Input, Button } from 'react-native-elements';

import styles from './styles';

const Register = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.titleLogin}>Crie sua conta</Text>
    <Input
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInput}
          leftIconContainerStyle={styles.iconStyle}
          placeholder='Nome'
          leftIcon={
            <Icon
              name='account-circle'
              size={24}
              color='black'
            />
          }
        />
    <Input
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInput}
          leftIconContainerStyle={styles.iconStyle}
          placeholder='E-mail'
          leftIcon={
            <Icon
              name='email'
              size={24}
              color='black'
            />
          }
        />
    <Input
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInput}
          leftIconContainerStyle={styles.iconStyle}
          placeholder='Senha'
          leftIcon={
            <Icon
              name='vpn-key'
              size={24}
              color='black'
            />
          }
        />

      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle} 
        title="Cadastrar"
        titleStyle={styles.titleButton}
      />

  </View>
);

Register.navigationOptions = {
  header: null,
};

export default Register;
