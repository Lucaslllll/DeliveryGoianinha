import React, {useState, useEffect} from 'react';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input, Button} from 'react-native-elements';

import styles from './styles';
import API from '../../../services/api';

export default function Password({navigation}) {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorMessage('Será utilizada para entrar na sua conta.')
  }, [])

  function handleNext(){
    setIsLoading(true);
    if(password !== ''){
      navigation.navigate('userName', {password: password, email: navigation.getParam('email')});
      setIsLoading(false);
    }else{
      handleError();
      setIsLoading(false);
    }
  }

  function handleError(){
    setErrorMessage('Informe a sua senha para continuar.');
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerInputTitle}>
        <Input
          label="Digite uma senha"
          labelStyle={styles.titleLogin}
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInput}
          leftIconContainerStyle={styles.iconStyle}
          errorStyle={{fontSize: 16}}
          placeholder="Senha"
          leftIcon={<Icon name="account-circle" size={24} color="black" />}
          onChangeText={e => setPassword(e)}
          errorMessage={errorMessage}
          autoFocus={true}
          textContentType="password" 
          secureTextEntry={true}
        />

      </View>
      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle}
        title="Continuar"
        titleStyle={styles.titleButton}
        onPress={() => handleNext()}
        loading={isLoading}      
        />
    </View>
  );
}
