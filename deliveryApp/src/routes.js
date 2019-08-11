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
        tabBarColor: '#CB4335',
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
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-search'}
            />
          </View>
        ),
        tabBarColor: '#CB4335',
      }
    },
  },
  {
    shifting: true,
    initialRouteName: 'Main',
    activeColor: '#000',
    inactiveColor: '#FFF',
    barStyle: { backgroundColor: '#CB4335' },
  }
);

const MainStack = createSwitchNavigator({
  Login: LoginStack,
  Main: HomeStack,
});

export default createAppContainer(HomeStack);
