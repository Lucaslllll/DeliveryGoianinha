import { StyleSheet, Dimensions } from "react-native";

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
  containerSearchS: {
    backgroundColor: "#000",
  },
  containerSearch: {
    backgroundColor: "#FAFAFA",
    alignItems: 'center'
  },
  inputSearch: {
    backgroundColor: '#FFF',
  },
  containerLoading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FAFAFA',
    borderRadius: 5,
    marginBottom: 20,
  },
  containerDisp: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  statusOn: {
    color: '#FFF',
    padding: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#2ECC71',
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  
  },

  statusOf:{
    color: '#FFF',
    fontWeight: 'bold',
    padding: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#E74C3C',
    textTransform: 'uppercase',
    textAlignVertical: 'center',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 5, 
  },
  
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80
  },
  imageDelivery: {
    height: 120,
    width: 120
  },
  productText: {
    justifyContent:'center'
  },
  containerTitle:{
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  
  productTitle: {
    fontSize: 17,
    width: '60%',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  containerDescription:{
    justifyContent: 'center',
    flexDirection: 'row'
  },
  productDescription: {
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 60,
  },
  containerRating: {
    marginVertical: 14,
    paddingHorizontal: 30,
  },
  list: {
    padding: 20,
  },
  animateLoading: {
    width: Dimensions.get('window').width,
  },
  textIsNoLoading: {
    fontWeight: 'bold',
    fontSize: 24
  }
});

export default styles;