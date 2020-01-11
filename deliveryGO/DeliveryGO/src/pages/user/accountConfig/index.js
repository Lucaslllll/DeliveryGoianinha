import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import TopNav from "../../../components/topNav";

import styles from "../account/styles";

export default function AccountConfig({navigation}) {

  function handleAlterPassword(){
    navigation.navigate('alterPassword');
  }

  return (
    <SafeAreaView>
      <TopNav 
        colorBack="#2980B9" 
        isBack={false} 
        titleHeader="Configurações"
      />
      <Button 
        buttonStyle={styles.btnConfig}
        containerStyle={styles.containerConfig}
        title="SENHA"
        titleStyle={styles.titleStyleConfig}
        onPress={() => handleAlterPassword()}
      />
    </SafeAreaView>
  );
}
