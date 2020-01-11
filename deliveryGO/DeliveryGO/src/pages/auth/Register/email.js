import React, {useState, useEffect} from 'react';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input, Button} from 'react-native-elements';

import styles from './styles';

// Importing AsyncStorage
import {storeData} from '../../../services/AsyncStorage';

// Importing API
import API from '../../../services/api';


export default function Email({navigation}) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageColorInitial, setErrorMessageColorInitial] = useState('#aaa');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setErrorMessage('Informações sobre seus pedidos serão enviadas para este e-mail')
  }, [])

  function validate(email){
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
  }

  async function handleNext(){
    setIsLoading(true);
    if(email !== ''){
      if(validate(email)){
        try{
          await API.post('/api/auth/register_email', {
            email: email
          });
          setIsLoading(false);
          navigation.navigate('ConfirmEmail', {email: email});
        }
        catch(err){
          setIsLoading(false);
          navigation.navigate('Password', {email: email});
        }
      }else{
        setIsLoading(false);
        setErrorMessageColorInitial('#E74C3C');
        setErrorMessage('Informe um e-mail válido.');      
      }
    }else{
      setIsLoading(false);
      setErrorMessageColorInitial('#E74C3C');
      setErrorMessage('Informe o e-mail para continuar.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInputTitle}>
        <Input
          label="Qual o seu e-mail?"
          labelStyle={styles.titleLogin}
          containerStyle={styles.inputLogin}
          inputStyle={styles.textInput}
          leftIconContainerStyle={styles.iconStyle}
          errorStyle={{fontSize: 13, color: errorMessageColorInitial}}
          placeholder="E-mail"
          leftIcon={<Icon name="account-circle" size={24} color="black" />}
          onChangeText={e => setEmail(e)}
          errorMessage={errorMessage}
          textContentType="emailAddress"
          autoFocus={true}
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
