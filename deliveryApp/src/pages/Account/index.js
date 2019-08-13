import React from "react";

import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Image, Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopNav from "../../components/topNav";
import styles from './styles';

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav colorBack="#2980B9" isBack={false} titleHeader="Account" />
      <ScrollView>
        <View style={styles.containerAccount}>
          <View style={styles.containerProfile}>
            <Image
              source={{
                uri:
                  'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
              }}
              style={styles.ImageProfile}
            />
            <View style={styles.containerName}>
              <Text style={styles.nameProfile}>Larivery</Text>
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
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
