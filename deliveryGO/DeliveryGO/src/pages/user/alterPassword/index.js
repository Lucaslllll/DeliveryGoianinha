import React, { useState } from "react";

import { SafeAreaView, Alert} from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import API from "../../../services/api";
import { getData } from '../../../services/AsyncStorage';
import { logout } from "../../../services/logout";

// Importing default profile photo picture
import defaultProfile from '../../../assets/img/defaultprofile.png';

export default function AlterPassword({navigation}) {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rNewPassword, setRNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePassword(){
    setIsLoading(true);
    try{
        await API.post('/reset-password', {
        pk: await getData('@USER_ID'),
        atual_password: password,
        password1: newPassword,
        password2: rNewPassword
      })
      setIsLoading(false);
      handleLogout();
    }catch(err){
      setIsLoading(false);
      Alert.alert('Algo deu errado!', 'Hmm, talvez a sua senha atual esteja incorreta!');
    }
  }
  async function handleLogout(){
    logout(await getData('@USER_ID'));
    navigation.navigate('Login');
  }


  return (
    <SafeAreaView style={styles.container}>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.containerInput}
        placeholder="Senha atual"
        leftIcon={<Icon name="vpn-key" size={24} color="black" />}
        value={password}
        onChangeText={e => setPassword(e)}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.containerInput}
        placeholder="Nova senha"
        leftIcon={<Icon name="vpn-key" size={24} color="black" />}
        value={newPassword}
        onChangeText={e => setNewPassword(e)}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.containerInput}
        placeholder="Repita a nova senha"
        leftIcon={<Icon name="vpn-key" size={24} color="black" />}
        value={rNewPassword}
        onChangeText={e => setRNewPassword(e)}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <Button
        containerStyle={styles.containerButton}
        title="ALTERAR"
        onPress={() => handlePassword()}
        loading={isLoading}
      />
    </SafeAreaView>
  );
}