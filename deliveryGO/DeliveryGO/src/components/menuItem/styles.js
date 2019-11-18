import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageItem: {
    height: 192,
  },
  containerButton:{
    height: 267,
  },
  name:{
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  price:{
    paddingVertical: 5,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#FFF',
  }
})

export default styles;