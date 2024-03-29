import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHeaderStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTitleStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    color: '#FFF',
    textTransform: "uppercase",
  },
  iconButtonTopStyle: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyles: {
    backgroundColor: "transparent",
  },
  disabledStyleButton: {
    backgroundColor: "transparent",
  },
});

export default styles;
