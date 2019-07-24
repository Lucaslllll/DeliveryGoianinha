import { StyleSheet } from 'react-native';

const colorTheme = "#9B59B6";

const styles = StyleSheet.create({
  containerNavBar: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colorTheme,
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