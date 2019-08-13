import React from "react";

import {
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
  View
} from "react-native";
import TopNav from "../../components/topNav";
import { Button, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

export default function DeliveryPage({ navigation }) {
  function handleMain() {
    navigation.navigate("Main");
  }

  return (
    <SafeAreaView>
      <TopNav
        titleHeader="OBBA!"
        isBack={true}
        colorBack="#8E44AD"
        pressButton={handleMain}
      />

      <ScrollView>
        <View style={styles.containerDelivery}>
          <View style={styles.infoDelivery}>
            <Image
              source={{
                uri:
                  'https://dmmzi9kl6wusl.cloudfront.net/obbaacaiuberlandia38/uploads/7344441010e0fe659a1eff8d4a459100.png',
              }}
              style={styles.imageDelivery}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.containerTitle}>
              <Text style={styles.title}>OBBA! AÇAÍ DELIVERY</Text>
            </View>
            <Button
              title="Fazer Pedido"
              containerStyle={styles.containerButtonStyle}
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
        <ScrollView horizontal={true}>
          <Image
            source={{
              uri:
                'https://st2.depositphotos.com/4687049/8399/i/450/depositphotos_83997502-stock-photo-tasty-fruit-dessert.jpg',
            }}
            style={styles.galeryImage}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Image
            source={{
              uri:
                'https://st2.depositphotos.com/4687049/8399/i/450/depositphotos_83997502-stock-photo-tasty-fruit-dessert.jpg',
            }}
            style={styles.galeryImage}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Image
            source={{
              uri:
                'https://st2.depositphotos.com/4687049/8399/i/450/depositphotos_83997502-stock-photo-tasty-fruit-dessert.jpg',
            }}
            style={styles.galeryImage}
            PlaceholderContent={<ActivityIndicator />}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
