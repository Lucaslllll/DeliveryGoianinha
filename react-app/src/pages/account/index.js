import React, { Component } from 'react';

import { View, Text, ActivityIndicator  } from 'react-native';
import { Image, Button } from 'react-native-elements';

export default class account extends Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={{ uri: 'http://simpleicon.com/wp-content/uploads/account.png' }}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          
          />
          <View>
            <Text>
              Jeffesson Gomes
            </Text>
            <Button title="Editar" />
            <Button title="Delivery" />
            <Button title="Sair" />


          </View>
        </View>
      </View>
    )
  }
}
