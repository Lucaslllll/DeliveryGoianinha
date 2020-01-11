import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

import TopNav from '../../../components/topNav';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles';

export default function MountRequest({navigation}) {
  
  function handleDeliveryPage(){
    navigation.navigate('request');
  }


  function handleMountRequestStage2(){
    navigation.navigate('mountRequestStage2', {backColor: navigation.getParam('backColor')});
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TopNav
            titleHeader={''}
            isBack={true}
            colorBack={navigation.getParam('backColor')}
            pressButton={handleDeliveryPage}
          />
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text style={styles.textTitle}>Por favor, escolha o tamanho do seu açaí.</Text>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.containerButton} onPress={() => handleMountRequestStage2()}>
              <MaterialIcon name="rice" size={50} color="#FFF" />
              <Text style={styles.textButton}>400ml</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton}>
              <MaterialIcon name="rice" size={60} color="#FFF" />
              <Text style={styles.textButton}>500ml</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton}>
              <MaterialIcon name="rice" size={70} color="#FFF" />
              <Text style={styles.textButton}>750ml</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton}>
              <MaterialIcon name="rice" size={70} color="#FFF" />
              <Text style={styles.textButton}>900ml</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
