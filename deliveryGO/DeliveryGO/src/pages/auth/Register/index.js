import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input, Button} from 'react-native-elements';

// Importing AsyncStorage
import {getData} from '../../../services/AsyncStorage';

import styles from './styles';

export default function Register({navigation}) {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleIsLogin();
  }, []);

  async function handleIsLogin(){
    if(await getData() !== null){
      navigation.navigate('beforeMain');
    }
  }
  
  function handleNext(){
    if(userName !== ''){
      navigation.navigate('Email', {userName: userName});
    }else{
      handleError();
    }
  }

  function handleError(){
    setErrorMessage('Informe o seu nome para continuar.');
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerInputTitle}>
        <Input
          label="Qual o seu nome?"
          labelStyle={styles.titleLogin}
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInput}
          leftIconContainerStyle={styles.iconStyle}
          errorStyle={{fontSize: 16}}
          placeholder="Nome"
          leftIcon={<Icon name="account-circle" size={24} color="black" />}
          onChangeText={e => setUserName(e)}
          errorMessage={errorMessage}
          
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
