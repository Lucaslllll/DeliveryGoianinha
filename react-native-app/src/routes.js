import { createStackNavigator } from 'react-navigation';

import Main from './pages/main/index';

export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    title: "AÇAÍ",
    headerStyle: {
      backgroundColor: "#9B59B6",
    },
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      color: "#FFF"
    }
  }
});
