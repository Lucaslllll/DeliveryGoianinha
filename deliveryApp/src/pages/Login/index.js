import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";

import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Input, Button } from "react-native-elements";

import styles from "./styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if (user) {
  //       navigation.navigate('Main', { user });
  //     }
  //   });
  // }, [navigation]);

  async function handleLogin() {
    // const _id = 10;

    // AsyncStorage.setItem('user', 10);

    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleLogin}>Acesse sua conta</Text>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="E-mail"
        leftIcon={<Icon name="email" size={24} color="black" />}
        value={user}
        onChangeText={setUser}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputLogin}
        inputStyle={styles.textInput}
        leftIconContainerStyle={styles.iconStyle}
        placeholder="Senha"
        leftIcon={<Icon name="vpn-key" size={24} color="black" />}
      />

      <Button
        containerStyle={styles.containerButton}
        buttonStyle={styles.buttonStyle}
        title="Login"
        titleStyle={styles.titleButton}
        onPress={handleLogin}
      />

      <TouchableOpacity>
        <Text style={styles.forget}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}
