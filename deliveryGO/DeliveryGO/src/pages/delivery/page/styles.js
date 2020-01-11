import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerScrollView:{
    backgroundColor: '#FAFAFA',
  },
  containerDelivery: {
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#FAFAFA'
  },
  ContainerStatus:{
    width: '100%',
  },
  statusOn:{
    width: '25%',
    textAlign: 'center',
    alignSelf: 'flex-end',
    color: '#FFF',
    padding: 5,
    fontWeight: 'bold',
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#2ECC71',
    textTransform: 'uppercase',
    textAlignVertical: 'center',
  },
  statusOf:{
    width: '25%',
    textAlign: 'center',
    alignSelf: 'flex-end',
    color: '#FFF',
    padding: 5,
    fontWeight: 'bold',
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#E74C3C',
    textTransform: 'uppercase',
    textAlignVertical: 'center',
  },
  infoDelivery: {
    paddingVertical: 0,
    width: '95%',
    backgroundColor: 'white',
    borderBottomColor: '#FAFAFA',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,

  },

  inputComment:{
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  imageDelivery: {
    width: 100,
    height: 100,
  },
  containerTitle: {
    width: '80%',
    paddingVertical: 5,
  },

  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#273746',
  },
  containerRating: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderTopColor: '#FAFAFA',
    borderTopWidth: 1,
  },
  containerOpen:{
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  titleOpen:{
    fontWeight: 'bold',
    paddingRight: 5,
  },
  containerHourOpen:{
    flexDirection: 'row'
  },
  desc: {
    paddingBottom: 10,
    paddingHorizontal: 19,
    textAlign: 'center',
    fontSize: 15,
  },
  galeryImage: {
    width: 300,
    height: 200,
  },
  containerButtonStyle: {
    paddingVertical: 10,
  },
  buttonStyle: {
    width: 150,
  },
  buttonStyleInputComment: {
    width: 50,
  },
  infoInputComment:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  containerGaleryImg: {
    paddingHorizontal: 6,
    marginVertical: 11,
    width: 300,
  },

  titleComments: {
    fontSize: 20,
    color: '#BDC3C7',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',
  },

  containerComments:{
    padding: 20,
    backgroundColor: '#FFF',
  },
  comment:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#BDC3C7',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  commentText: {
    paddingHorizontal: 10,
  },

  commentName:{
    fontSize: 16,
    fontWeight: 'bold',

  },
  commentDesc:{
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 35,
  },
  imageComment:{
    width: 60,
    height: 60,
  }
});

export default styles;
