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

const LoginStack = createStackNavigator({
  beforeLogin: beforeLogin,
  Login: Login,
  Register: Register
});

const HomeStack = createMaterialBottomTabNavigator(
  {
    Main: Main,
    Account: Account,
    Login: Login,
  },
  {
    initialRouteName: 'Main',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const MainStack = createSwitchNavigator({
  Login: LoginStack,
  Main: HomeStack,
});

export default createAppContainer(HomeStack);
