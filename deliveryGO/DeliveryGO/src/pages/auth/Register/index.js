import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input, Button} from 'react-native-elements';

// Importing API
import API from '../../../services/api';

// Importing AsyncStorage
import {storeData} from '../../../services/AsyncStorage';

// Importing AsyncStorage
import {getData} from '../../../services/AsyncStorage';

import styles from './styles';

export default function Register({navigation}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('Crie sua conta');
  const [isWarning, setIsWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleIsLogin();
  }, []);

  async function handleIsLogin(){
    if(await getData() !== null){
      navigation.navigate('beforeMain');
    }
  }
  async function handleRegister() {
    setIsLoading(true);
    try {
      const response = await API.post('/api/auth/register', {
        username: userName,
        email: email,
        password: password,
      });
      await storeData('@USER_ID', `${response.data.user.id}`);
      await storeData('@USER_TOKEN', `${response.data.token}`);
      navigation.navigate('beforeMain');
      setIsLoading(false);

    } catch (err) {
      setTitle('Usuário já está cadastrado!');
      setIsWarning(true);
      setIsLoading(false);
    }
  }

  function handleBtnRegister() {
    if (!userName || !email || !password) {
      setTitle('Digite todos os campos!');
      setIsWarning(true);
    } else {
      handleRegister();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={isWarning ? styles.titleWarning : styles.titleLogin}>
        {title}
      </Text>
      <Input
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="Nome"
        leftIcon={<Icon name="account-circle" size={24} color="black" />}
        onChangeText={e => setUserName(e)}
      />
      <Input
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="E-mail"
        leftIcon={<Icon name="email" size={24} color="black" />}
        onChangeText={e => setEmail(e)}
        autoCompleteType="email"
        autoCapitalize="none"
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="Senha"
        leftIcon={<Icon name="vpn-key" size={24} color="black" />}
        value={password}
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle}
        title="Cadastrar"
        titleStyle={styles.titleButton}
        onPress={() => handleBtnRegister()}
        loading={isLoading}      
        />
    </View>
  );
}
