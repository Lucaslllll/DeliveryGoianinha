import React from "react";

import { View } from "react-native";

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import beforeLogin from './pages/beforeLogin';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/main';
import Account from './pages/Account';
import Icon from "react-native-vector-icons/Ionicons";
import Search from "./pages/search";
import DeliveryPage from "./pages/deliveryPage";
import TopNav from "./components/topNav";

const LoginStack = createStackNavigator({
  beforeLogin: beforeLogin,
  Login: Login,
  Register: Register
});
const HomeStack = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
        tabBarColor: '#e3672b',
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-person'}
            />
          </View>
        ),
        tabBarColor: '#2980B9',
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-search'}
            />
          </View>
        ),
        tabBarColor: '#e3672b',
      },
    },
  },
  {
    shifting: true,
    initialRouteName: 'Account',
    activeColor: '#000',
    inactiveColor: '#FFF',
    barStyle: { backgroundColor: '#e3672b' },
  }
);

const MainStack = createSwitchNavigator({
  Delivery: DeliveryPage,
  Login: LoginStack,
  Main: HomeStack,
  TopNav: TopNav
});

export default createAppContainer(MainStack);
