import React from 'react';

import { View } from "react-native";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// Importing LoginStack
import main from '../pages/auth/main';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';


// Importing Home and beforeMain
import Home from '../pages/main';
import beforeMain from '../pages/beforeMain';

// Importing User
import Account from '../pages/user/account';

import Icon from "react-native-vector-icons/Ionicons";

// Importing Search
import Search from "../pages/search";

import DeliveryPage from "../pages/delivery/page/";
// import TopNav from "./components/topNav";

// importing Request
import Request from '../pages/delivery/request/';

const LoginStack = createStackNavigator({
  main: main,
  Login: Login,
  Register: Register,
});

const HomeStack = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Início',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
        tabBarColor: '#e3672b',
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
        tabBarColor: '#2980B9',
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Buscar',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-search'} />
          </View>
        ),
        activeColor: '#FFF',
        tabBarColor: '#000',
      },
    },
  },
  {
    shifting: true,
    initialRouteName: 'Main',
    activeColor: '#000',
    inactiveColor: '#FFF',
    barStyle: {backgroundColor: '#e3672b'},
  },
);

const beforeMainStack = createStackNavigator({
  beforeMain: beforeMain,
  main: {
    screen: HomeStack,
    navigationOptions: {
      header: null,
    }
  },
  Delivery: {
    screen: DeliveryPage,
    navigationOptions: {
      header: null,
    }
  },
  request: {
    screen: Request,
    navigationOptions: {
      header: null,
    }
  }
})

const MainStack = createSwitchNavigator({
  beforeMain: beforeMainStack,
  Login: LoginStack,
  // TopNav: TopNav,
});

export default createAppContainer(MainStack);
