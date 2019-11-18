import React, {useState, useEffect} from 'react';

// import AsyncStorage from '@react-native-community/async-storage';

import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input, Button} from 'react-native-elements';

import styles from './styles';

// Importing API
import API from '../../../services/api';

// Importing AsyncStorage
import {storeData} from '../../../services/AsyncStorage';
import {getData} from '../../../services/AsyncStorage';
// Importing Logout
import {logout} from '../../../services/logout';

export default function Login({navigation}) {
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  const [_err, set_Err] = useState('Acesse sua conta');
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    handleIsLogin();
  }, []);

  async function handleIsLogin(){
    if(await getData() !== null){
      navigation.navigate('beforeMain');
    }
  }

  async function handleLogin() {
    setIsLoading(true);
    try {
      const response = await API.post('/api/auth/login', {
        email: _email,
        password: _password,
      });
      if (response.data.estado) {
        await storeData('@USER_ID', `${response.data.user.pk}`);
        await storeData('@USER_TOKEN', `${response.data.token}`);
        navigation.navigate('beforeMain');
        setIsLoading(false);
      } else {
        logout(response.data.id);
        handleLogin();
        setIsLoading(false);
      }
    } catch (err) {
      setIsErr(true);
      set_Err('Dados incorretos!');
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={ isErr ? styles.isErr : styles.titleLogin}>{_err}</Text>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="E-mail"
        leftIcon={<Icon name="email" size={24} color="black" />}
        value={_email}
        onChangeText={e => setEmail(e)}
        autoCompleteType="email"
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="Senha"
        leftIcon={<Icon name="vpn-key" size={24} color="black" />}
        value={_password}
        onChangeText={e => setPassword(e)}
        autoCompleteType="password"
        secureTextEntry={true}
      />

      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle}
        title="Entrar"
        titleStyle={styles.titleButton}
        onPress={handleLogin}
        loading={isLoading}
      />

      <TouchableOpacity>
        <Text style={styles.forget}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}
