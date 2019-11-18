import React, {useState, useEffect} from 'react';

import {
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  FlatList,
  TextInput
} from 'react-native';
import TopNav from '../../../components/topNav';
import {Button, Image} from 'react-native-elements';

// Importing API
import API from '../../../services/api';

// Logout
import {logout} from '../../../services/logout';

import styles from './styles';
import { getData } from '../../../services/AsyncStorage';

//importing verifyUser
import {verifyUser} from '../../../services/verifyUser';

// Importing rating
import RatingStar from '../../../components/ratingStar';

// Importing Item menu
import MenuItem from '../../../components/menuItem';

export default function DeliveryPage({navigation}) {
  const [delivery, setDelivery] = useState({});
  const [comments, setComments] = useState([]);
  const [fim, setFim] = useState('');
  const [inicio, setInicio] = useState('');
  const [menu, setMenu] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  useEffect(() => {
    verify();
  }, []);

  async function handleComment(){
    setIsLoadingComment(true);
    try{
      await API.post(`/api/comentario/`, {
        titulo: '',
        descricao: descricao,
        autor: await getData('@USER_ID'),
        restaurante: menu.restaurante 
      })
      setIsLoadingComment(false);
   }catch(err){
    setIsLoadingComment(false);
   }
  }
  
  async function verify(){
    const response = await verifyUser(await getData('@USER_ID'), await getData('@USER_TOKEN'));
    if(response){
      loadDelivery();
    }else{
      logout(await getData('@USER_ID'));
      navigation.navigate('Login');
    }
  };
  
  async function loadDelivery(){
    const { data } = await API.get(`/api/restaurante/${navigation.getParam('slug')}`);
    const {data: {comentarios}} = await API.get(`/api/pegar_comentarios/joca`);
    const {data: {cardapio}} = await API.get(`/api/pegar_cardapio/${navigation.getParam('slug')}`);
    setMenu(cardapio);
    setComments(comentarios);
    setDelivery(data);
    setFim(data.fim);
    setInicio(data.inicio);
  }

  function handleMenu(){
    navigation.navigate('request', {slug: navigation.getParam('slug'), backColor: navigation.getParam('backColor')});
  }

  function handleMain() {
    navigation.navigate('Main');
  }


  function loadAuthor(item){

  }
  
  function renderMenu({item}){
    return(
      <View style={styles.containerGaleryImg}>
        <MenuItem 
          name={item.nome}
          img={item.foto}
          price={item.preco}
          backColor={navigation.getParam('backColor')}
        />
      </View>
    )
  }

  function renderComment({item}) {
    
    return(
      <View style={styles.comment}>
        <Image
          source={{
            uri:
              'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          }}
          style={styles.imageComment}
        />
        <View style={styles.commentText}>
          <Text style={styles.commentName}>{item.autor}</Text>
        <Text style={styles.commentDesc}>{item.detalhes}</Text>
        </View>
      </View>
    )
  }
  function loadMore() {}
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNav
        titleHeader={navigation.getParam('title')}
        isBack={true}
        colorBack={navigation.getParam('backColor')}
        pressButton={handleMain}
      />

      <ScrollView style={styles.containerScrollView}>
        <View style={styles.containerDelivery}>
          <View style={styles.infoDelivery}>
            <View style={styles.ContainerStatus}>
              <Text style={delivery.status ? styles.statusOn : styles.statusOf}>
                { delivery.status ? 'Aberto' : 'Fechado' }
              </Text>
            </View>
            <Image
              source={{
                uri:
                  delivery.foto,
              }}
              style={styles.imageDelivery}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.containerTitle}>
              <Text style={styles.title}>{delivery.nome}</Text>
            </View>
            <View style={styles.containerOpen}>
              <View style={styles.containerHourOpen}>
                <Text style={styles.titleOpen}>Aberto:</Text>
                <Text>{inicio.substr(0,5)} às {fim.substr(0,5)} horas</Text>
              </View>
            <Text>{delivery.dias}.</Text>
            </View>
            <Button
              onPress={() => handleMenu()}
              icon={{
                name: 'restaurant-menu',
                size: 22,
                color: 'white'
              }}
              title="CARDÁPIO"
              containerStyle={styles.containerButtonStyle}
              buttonStyle={[styles.buttonStyle, {backgroundColor: navigation.getParam('backColor')}]}
            />
            <View style={styles.containerRating}>
              <RatingStar star={navigation.getParam('nota')} style={styles.RatingStar}/>
            </View>
          </View>
        </View>
        <FlatList
              contentContainerStyle={styles.list}
              data={menu}
              keyExtractor={(item, index) => `list-item-${index}`}
              renderItem={renderMenu}
              horizontal={true}
        />
        <View style={styles.containerComments}>
          <View>
            <Text style={styles.titleComments}>Comentários</Text>
          </View>
          <View>
            <TextInput 
              onChangeText={text => setDescricao(text)}
              value={descricao}
              style={styles.inputComment}  
              placeholder="Descreva sua experiência (opcional)"
              maxLength={50}
              multiline
            />
            <View style={styles.infoInputComment}>
              <Text>{descricao.length}/50</Text>
              <Button
                onPress={() => handleComment()}
                icon={{
                  name: 'send',
                  size: 22,
                  color: 'white'
                }}
                loading={isLoadingComment}
                containerStyle={styles.containerButtonStyle}
                buttonStyle={[styles.buttonStyleInputComment, {backgroundColor: navigation.getParam('backColor')}]}
              />
            </View>
            <FlatList
              contentContainerStyle={styles.list}
              data={comments}
              keyExtractor={(item, index) => `list-item-${index}`}
              renderItem={renderComment}
            />
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
