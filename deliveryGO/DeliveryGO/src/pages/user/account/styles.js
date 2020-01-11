import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerAccount: {
    flex: 1,
    alignItems: "center",
    marginBottom: 50,
  },
  containerProfile: {
    marginVertical: 10,
    paddingVertical: 10,
    width: '85%',
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
    width: '100%',
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  nameProfile: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5,
    textAlign: "center",
  },
  btnConfig: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1
  },
  containerConfig: {
    width: '100%'
  },
  titleStyleConfig: {
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 0,
    color: '#000'
  },
  containerInputButtonExit: {
    paddingVertical: 10,
    borderRadius: 0,
    backgroundColor: '#E74C3C'
  },
  titleStyleExit: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase'
  }
});

export default styles;