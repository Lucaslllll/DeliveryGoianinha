import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import TopNav from '../../../components/topNav';
import MenuItem from '../../../components/menuItem/';

import styles from './styles';

import API from '../../../services/api';

export default function Request({navigation}) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    loadMenu();
  }, [])

  function handleDeliveryPage(){
    navigation.navigate('Delivery');
  }

  function handleMountRequest(){
    navigation.navigate('mountRequest', {backColor: navigation.getParam('backColor')});
  }

  async function loadMenu(){
    try{
      const {data: {cardapio}} = await API.get(`/api/pegar_cardapio/${navigation.getParam('slug')}`);
      setMenu(cardapio);
    }catch(err){

    }
  }

  function renderItem({item}){
    return(
      <View style={styles.containerItems}>
        <View style={styles.containerMenuItem}>
          <MenuItem 
            name={item.nome}
            price={item.preco}
            img={item.foto}
            backColor={navigation.getParam('backColor')} 
            pressButton={handleMountRequest}
            
            />
        </View>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <TopNav
        titleHeader={navigation.getParam('title')}
        isBack={true}
        colorBack={navigation.getParam('backColor')}
        pressButton={handleDeliveryPage}
      /> 
      <FlatList
        contentContainerStyle={styles.list}
        data={menu}
        keyExtractor={(item, index) => `list-item-${index}`}
        renderItem={renderItem}
      />
    </View>
  );
}
