import React from 'react';

import { View, Text } from 'react-native';

import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const TopNav = (props) => (
  <View>
    <View style={styles.containerHeaderStyle}>
      { props.isBack 
        ?
        <Button 
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyles}
          iconContainerStyle={styles.iconButtonTopStyle}
          icon={{
            name: "keyboard-arrow-left",
            size: 35,
            color: "#FFF"
          }}

          onPress={() => {}}
          />
          :
          <Button 
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyles}
          iconContainerStyle={styles.iconButtonTopStyle}
          icon={{
            name: "",
            size: 35,
            color: "#FFF"
          }}
          disabled
          disabledStyle={styles.disabledStyleButton}
          onPress={() => {}}
          />
        }
      <Text style={styles.headerTitleStyle}>
        { props.titleHeader }
      </Text>
      <Button
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyles}
        iconContainerStyle={styles.iconButtonTopStyle}
        icon={{
          name: "chat-bubble",
          size: 25,
          color: "#FFF"
        }}
        onPress={() => {}}

      />
    </View>
  </View>
);

export default TopNav;