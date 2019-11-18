import React, { useState, useEffect } from "react";

import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Image, Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopNav from "../../../components/topNav";
import styles from './styles';
import API from "../../../services/api";

// Importing default profile photo picture
import defaultProfile from '../../../assets/img/defaultprofile.png';

// importint getData
import { getData } from '../../../services/AsyncStorage';

// Importing verify User
import { verifyUser } from '../../../services/verifyUser';

// importing logout
import { logout } from "../../../services/logout";

export default function Account({navigation}) {
  const [user, setUser] = useState('');

  useEffect(() => {
    verify();
  }, [])

  async function verify(){
    const response = await verifyUser(await getData('@USER_ID'), await getData('@USER_TOKEN'));
    if(response){
      loadUser();
    }else{
      handleLogout();
    }
  }

  async function handleLogout(){
    logout(await getData('@USER_ID'));
    navigation.navigate('Login');
  }

  async function loadUser() {
    const {data} = await API.post('/api/auth/user', {
      pk: await getData('@USER_ID'),
    });
    setUser(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNav colorBack="#2980B9" isBack={false} titleHeader="Perfil" />
      <ScrollView>
        <View style={styles.containerAccount}>
          <View style={styles.containerProfile}>
            <Image
              resizeMode="contain"
              source={defaultProfile}
              style={styles.ImageProfile}
            />
            <View style={styles.containerName}>
              <Text style={styles.nameProfile}>{user.username}</Text>
              <Text style={styles.nameProfile}>{user.email}</Text>
            </View>
            <View style={styles.containerPassword}>
              <View style={styles.containerTitlePassoword}>
                <Text style={styles.titlePassword}>Alterar senha</Text>
              </View>
              <Input
                containerStyle={styles.containerInputButton}
                placeholder="Senha atual"
                leftIcon={<Icon name="vpn-key" size={24} color="black" />}
              />
              <Input
                containerStyle={styles.containerInputButton}
                placeholder="Nova senha"
                leftIcon={<Icon name="vpn-key" size={24} color="black" />}
              />
              <Input
                containerStyle={styles.containerInputButton}
                placeholder="Repita a nova senha"
                leftIcon={<Icon name="vpn-key" size={24} color="black" />}
              />
              <Button
                containerStyle={styles.containerInputButton}
                title="Trocar senha"
              />
              <Button
              containerStyle={styles.containerInputButton}
              buttonStyle={styles.containerInputButtonExit}
              onPress={() => handleLogout()}
              title="Sair"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}