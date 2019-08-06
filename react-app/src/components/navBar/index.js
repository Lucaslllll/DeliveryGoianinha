import React from 'react';

import { View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const NavBar = () => (
  <View>
    <View style={styles.containerNavBar}>
      <TouchableOpacity 
        style={styles.buttonActive}
      >
        <Icon style={styles.IconActive} name="home" />
      </TouchableOpacity>   
      <TouchableOpacity style={styles.buttonNavBar}>
        <Icon style={styles.IconNavBar} name="account-circle" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNavBar}>
        <Icon style={styles.IconNavBar} name="search" />
      </TouchableOpacity>
    </View>
  </View>
);

export default NavBar;