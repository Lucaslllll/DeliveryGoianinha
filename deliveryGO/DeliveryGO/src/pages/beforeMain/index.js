import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import styles from './styles';

import {deleteItem} from '../../services/AsyncStorage';

import Icon from 'react-native-vector-icons/FontAwesome5';


export default function beforeMain({navigation}) {
  function handleButton(id, name, color) {
    navigation.navigate('Main', {tag: id, title: name, backColor: color});    
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('acai', 'Açaí', '#8E44AD')}  style={styles.containerButton}>
          <Icon name="concierge-bell" size={60} color="#FFF" />
          <Text style={styles.textButton}>Açaí</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('pizzaria', 'Pizza', '#F5B041')} style={[styles.containerButton, {backgroundColor: '#F5B041'}]}>
          <Icon name="pizza-slice" size={60} color="#FFF" />
          <Text style={[styles.textButton, {color: '#FFF'}]}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('hamburger', 'Hambúrguer', '#e3672b')} style={[styles.containerButton, {backgroundColor: '#e3672b'}]}>
          <Icon name="hamburger" size={60} color="#FFF" />          
          <Text style={[styles.textButton, {color: '#FFF'}]}>Hambúrguer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

beforeMain.navigationOptions = {
  header: null,
};
