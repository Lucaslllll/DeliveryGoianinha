import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerDelivery: {
    marginVertical: 20,
    alignItems: "center",
  },
  infoDelivery: {
    paddingVertical: 10,
    width: "100%",
    borderTopColor: "#DADADA",
    borderBottomColor: "#DADADA",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  imageDelivery: {
    width: 100,
    height: 100,
  },
  containerTitle: {
    width: '80%',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    paddingVertical: 5
  },

  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },

  galeryImage: {
    width: 130,
    height: 400
  },
  containerButtonStyle: {
    paddingVertical: 8
  },
  buttonStyle: {
    backgroundColor: '#8E44AD'
  }
});

export default styles;
