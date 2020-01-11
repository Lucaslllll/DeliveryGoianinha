import {StyleSheet} from 'react-native';

import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  textTitle:{
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 21,
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: '#212F3C'
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DADADA',
    color: '#626567'
  },
  containerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  containerButton: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/2.5,
    backgroundColor: '#7D3C98',
    borderWidth: 2,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton:{
    color: '#FFF',
    textTransform: 'lowercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerCheckBox: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 30
  },
  containerFlatList:{
    marginVertical: 10,
    marginLeft: 30,
    flex: 1,
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width
  },
  containerCondimentos:{
    justifyContent: 'center',
    paddingVertical: 3
  },
  containerButtonNextBefore: {
    flexDirection: 'row'
  },
  containerButtonBefore: {
    height: Dimensions.get('window').height/10,
    width: Dimensions.get('window').width/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#8E44AD',
    borderWidth: 1
  },
  containerButtonNext: {
    height: Dimensions.get('window').height/10,
    width: Dimensions.get('window').width/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8E44AD'
  },
  textBefore: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#8E44AD'
  },
  textNext: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerLoading: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textSelectOpcoes: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    width: 50,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  nothing: {
    width: 50
  },
  containerCounter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  textCounter: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 5,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 7,
    fontSize: 20,
    backgroundColor: '#FFF'
  }

});

export default styles;