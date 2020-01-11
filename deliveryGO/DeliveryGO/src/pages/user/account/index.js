import React, { useState, useEffect } from "react";

import { SafeAreaView, ScrollView, View, Text} from "react-native";
import { Image, Button } from "react-native-elements";
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
  }, [navigation])



  async function verify(){
    const response = await verifyUser(await getData('@USER_ID'), await getData('@USER_TOKEN'));
    if(response){
      loadUser();
      requestLocationPermission();
    }else{
      handleLogout();
    }
  }

  async function handleLogout(){
    logout(await getData('@USER_ID'));
    navigation.navigate('Login');
  }

  function handleConfig(){
    navigation.navigate('configUser');
  }

  function handleLocation(){
    navigation.navigate('locationUser');
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
            <Button
              buttonStyle={styles.btnConfig}
              containerStyle={styles.containerConfig}
              title="Localização"
              titleStyle={styles.titleStyleConfig}
              onPress={() => handleLocation()}
            />
            <Button
              buttonStyle={styles.btnConfig}
              containerStyle={styles.containerConfig}
              title="Configurações"
              titleStyle={styles.titleStyleConfig}
              onPress={() => handleConfig()}
            />
            <Button
              containerStyle={styles.containerConfig}
              buttonStyle={styles.containerInputButtonExit}
              titleStyle={styles.titleStyleExit}
              onPress={() => handleLogout()}
              title="Sair"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}