import {StyleSheet} from 'react-native';

colorTheme = '#e3672b';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  list: {
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FAFAFA',
    borderRadius: 5,
    marginBottom: 20,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 5, 
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

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80
  },

  imageDelivery: {
    height: 120,
    width: 120
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
  productText: {
    justifyContent:'center'
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

  IconCardapio: {
    fontSize: 26,
    color: '#FFF',
    paddingLeft: 2,
    paddingRight: 2,
  },
});

export default styles;
