import React from 'react';
import { View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';

export default function MenuItem(props) {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.70} style={styles.containerButton}>
        <Image 
          resizeMode="contain"
          source={{
            uri:
              props.img,
          }}
          style={styles.imageItem}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View>
        <Text style={[styles.name, {backgroundColor: props.backColor}]}>{props.name}</Text>
          <Text style={[styles.price, {color: props.backColor, borderColor: props.backColor}]}>R$ {props.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
