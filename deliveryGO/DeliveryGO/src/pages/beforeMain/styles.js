import {StyleSheet} from 'react-native';

import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  containerButtons:{
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  containerButton: {
    alignItems: 'center',
    backgroundColor: '#8E44AD',
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  }
})

export default styles;