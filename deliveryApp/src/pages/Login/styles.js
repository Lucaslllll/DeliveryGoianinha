import { StyleSheet } from "react-native";

colorTheme = 'red';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 20
  },

  titleLogin: {
    fontWeight: "bold",
    fontSize: 18,
  },

  containerButton: {
    width: "96%",
    marginTop: 22
  },

  inputLogin: {
    marginTop: 15
  },

  buttonStyle: {
    backgroundColor: colorTheme,
    borderRadius: 0
  },

  titleButton: {
    textTransform: "uppercase"
  },

  forget: {
    color: "grey",
    fontSize: 15,
    marginTop: 7,
  },
});

export default styles;
