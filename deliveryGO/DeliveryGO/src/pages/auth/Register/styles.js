import {StyleSheet} from 'react-native';

colorTheme = '#e3672b';

import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  containerInputTitle:{
    paddingVertical: 30,
    width: '100%'
  },
  titleLogin: {
    fontSize: 20,
    color: '#1C2833'
  },
  titleWarning: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#CB4335',
  },
  containerButton: {
    width: Dimensions.get('window').width,
    marginTop: 22,
  },

  inputLogin: {
    marginTop: 15,
  },

  buttonStyle: {
    backgroundColor: colorTheme,
    borderRadius: 0,
    width: Dimensions.get('window').width
  },

  titleButton: {
    textTransform: 'capitalize',
  },

  titleCod:{
    fontSize: 20
  },
  emailCod:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInputCod: {
    textAlign: 'center'
  },
  inputContainerCod: {
    marginTop: 30
  }
});

export default styles;
