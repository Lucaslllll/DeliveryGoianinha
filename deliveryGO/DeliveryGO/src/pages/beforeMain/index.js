import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import styles from './styles';

import {deleteItem} from '../../services/AsyncStorage';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function beforeMain({navigation}) {
  function handleButton(id, name, color) {
    navigation.navigate('Main', {tag: id, title: name, backColor: color});    
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerButtons}>
          <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('acai', 'Açaí', '#8E44AD')}  style={styles.containerButton}>
            <MaterialIcon name="rice" size={60} color="#FFF" />
            <Text style={styles.textButton}>Açaí</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('pizzaria', 'Pizza', '#F1C40F')} style={[styles.containerButton, {backgroundColor: '#F1C40F'}]}>
            <Icon name="pizza-slice" size={60} color="#FFF" />
            <Text style={[styles.textButton, {color: '#FFF'}]}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('hamburger', 'Hambúrguer', '#e3672b')} style={[styles.containerButton, {backgroundColor: '#e3672b'}]}>
            <Icon name="hamburger" size={60} color="#FFF" />          
            <Text style={[styles.textButton, {color: '#FFF'}]}>Hambúrguer</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.80} onPress={() => handleButton('aguagas', 'ÁGUA E GÁS', '#2980B9')} style={[styles.containerButton, {backgroundColor: '#2980B9'}]}>
            <MaterialIcon name="water" size={60} color="#FFF" />          
            <Text style={[styles.textButton, {color: '#FFF'}]}>Água e gás</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

beforeMain.navigationOptions = {
  header: null,
};
