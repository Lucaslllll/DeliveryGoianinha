import React from 'react';

import { SafeAreaView, View, Text } from 'react-native';

import { Button } from 'react-native-elements';

import styles from './styles';

export default function TopNav(props) {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.containerHeaderStyle,
          { backgroundColor: props.colorBack }
        ]}
      >
        {props.isBack ? (
          <Button
            containerStyle={styles.buttonContainerStyle}
            buttonStyle={styles.buttonStyles}
            iconContainerStyle={styles.iconButtonTopStyle}
            icon={{
              name: "keyboard-arrow-left",
              size: 35,
              color: "#FFF"
            }}
            onPress={props.pressButton}
          />
        ) : (
          <Button
            containerStyle={styles.buttonContainerStyle}
            buttonStyle={styles.buttonStyles}
            iconContainerStyle={styles.iconButtonTopStyle}
            icon={{
              name: null,
              size: 35,
              color: "#FFF"
            }}
            disabled
            disabledStyle={styles.disabledStyleButton}
            onPress={() => {}}
          />
        )}
        <Text style={styles.headerTitleStyle}>{props.titleHeader}</Text>
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
    </SafeAreaView>
  );
}
