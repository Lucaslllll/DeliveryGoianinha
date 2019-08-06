import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button } from 'react-native-elements';

import styles from './styles';

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.titleLogin}>Acesse sua conta</Text>
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
        title="Login"
        titleStyle={styles.titleButton}
      />

      <TouchableOpacity>
        <Text style={styles.forget}>
          Esqueci a senha
        </Text>
      </TouchableOpacity>

  </View>
);

Login.navigationOptions = {
  header: null,
}


export default Login;
