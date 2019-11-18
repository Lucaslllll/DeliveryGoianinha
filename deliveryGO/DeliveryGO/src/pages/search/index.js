import React, { useState, useEffect } from 'react';

import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import SearchBarC from '../../components/searchBar';
import Lottie from 'lottie-react-native';


import styles from './styles';


import search from '../../assets/animate/search.json';

export default function Search() {
  return (
    <View style={{}}>
      <SearchBarC onPress={() => handleSearch()} />
      <View style={styles.containerSearch}>
          <Lottie 
            loop={false} 
            autoPlay={true} 
            resizeMode='contain' 
            source={search} 
            style={{width: 
              250, height: 250, borderBottomColor: 'black', borderBottomWidth: 15}}
            />
            <View style={styles.containerFilter}>
              <TouchableOpacity style={[styles.containerBtnFilter, {borderColor: '#000'}]}>
                <Text style={[styles.textBtnFilter, {color: '#000'}]}>Entrega gratuita</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.containerBtnFilter, {borderColor: '#000'}]}>
                <Text style={[styles.textBtnFilter, {color: '#000'}]}>Promoções</Text>
              </TouchableOpacity>
            </View>
      </View>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
}