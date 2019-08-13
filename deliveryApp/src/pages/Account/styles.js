import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerAccount: {
    flex: 1,
    alignItems: "center",
  },
  containerProfile: {
    marginVertical: 10,
    paddingVertical: 10,
    width: "85%",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 5,
  },
  ImageProfile: {
    height: 120,
    width: 120,
    borderRadius: 120,
  },
  containerName: {
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
    width: '80%',
  },
  nameProfile: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5,
    textAlign: "center",
  },
  containerPassword: {
    width: '90%'
  },
  containerTitlePassoword: {
    paddingVertical: 20
  },
  titlePassword: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
  containerInputButton: {
    paddingVertical: 5
  },
});

export default styles;
