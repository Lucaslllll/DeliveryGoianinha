import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";


import Main from './pages/main/';
import Login from './pages/Login';
import Register from './pages/Register';
import BeforeLogin from './pages/beforeLogin';
import Account from './pages/account';

const HomeStack = createStackNavigator({
  Main: Main,
});

const TabMenu = createBottomTabNavigator(
  {
    Home: HomeStack,
    Account: Account
  }, {
    tabBarOptions: {
      labelStyle: {
        
      },
      tabStyle: {
        
      }
    } 
  }
);

export default createAppContainer(TabMenu);
