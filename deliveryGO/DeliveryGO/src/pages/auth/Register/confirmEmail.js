import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Button, Input} from 'react-native-elements';


import styles from './styles';


// Importing AsyncStorage
import {storeData} from '../../../services/AsyncStorage';

// Importing API
import API from '../../../services/api';

export default function Email({navigation}) {
  const [cod, setCod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageColorInitial, setErrorMessageColorInitial] = useState('#aaa');
  const [isLoading, setIsLoading] = useState(false);

  async function handleNext(){
    setIsLoading(true);
    try{
      await API.post('/api/auth/register_confirme', {
        codigo: cod
      })
      setIsLoading(false);
      navigation.navigate('Password', {email: navigation.getParam('email')});
    }
    catch(err){
      setIsLoading(false);
      setErrorMessageColorInitial('#E74C3C');
      setErrorMessage('Código inválido!'); 
    }
  }

  function handleCode(e){
    setCod(e);
  }

  function handleText(e){
    console.log(e);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerInputTitle}>
        <View style={styles.inputContainerCod}>
        <Input
          label={
          <>
            <Text style={styles.titleCod}>Digite o código que foi enviado para</Text>
            <Text style={styles.emailCod}>{navigation.getParam('email')}</Text>
          </>
          }
          labelStyle={styles.titleLogin}
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInputCod}
          leftIconContainerStyle={styles.iconStyle}
          errorStyle={{fontSize: 18, color: errorMessageColorInitial, textAlign: 'center'}}
          placeholder=""
          onChangeText={e => handleCode(e)}
          errorMessage={errorMessage}
          textContentType="oneTimeCode"
          keyboardType="number-pad"
          autoFocus={true}
          maxLength={5}
        />
        </View>
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
