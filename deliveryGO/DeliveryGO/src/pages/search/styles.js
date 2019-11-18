import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerSearch:{
    justifyContent: 'center',
    alignSelf: 'center',
    height: '80%',
  },
  textSearch: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  containerFilter:{
    justifyContent: 'center',
    marginTop: 10,
  },
  textBtnFilter:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  containerBtnFilter:{
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginBottom: 5,
  },
});

export default styles;