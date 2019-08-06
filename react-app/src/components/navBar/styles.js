import { StyleSheet } from 'react-native';

import colorTheme from '../../styles/stylesGlobal';

const styles = StyleSheet.create({
  containerNavBar: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colorTheme.colorTop,
  },

  buttonNavBar: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonActive: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFF",
  },

  IconActive: {
    color: "#000",
    fontSize: 35,
  },

  IconNavBar: {
    color: "#FFF",
    fontSize: 35,
  },
});


export default styles;