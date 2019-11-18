import React, {useState, useEffect} from 'react';
import API from '../../services/api';

import styles from './styles';

import TopNav from '../../components/topNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RatingStar from '../../components/ratingStar';

import {Image} from 'react-native-elements';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function Home({navigation}) {
  const [productInfo, setProductInfo] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    if(navigation.getParam('tag')){
      loadProducts();
    }
  }, [navigation]);

  async function loadProducts() {
    const {data: {restaurantes}} = await API.get(`/api/filtrar_restaurante/${navigation.getParam('tag')}`);
    restaurantes.forEach(async (delivery, index, deliverys) => {
      const {data: {nota}} = await API.get(`/api/classificacao_restaurante_final/${delivery.slug}`);           
      const {data: {foto}} = await API.get(`api/foto_restaurante/2`);
      delivery.nota = nota;
      delivery.foto = foto;
      if(index === deliverys.length-1){
        setProductInfo(deliverys);
      }
    });
  };

  function handleButton(e, rating){
    navigation.navigate('Delivery', {slug: e, title: navigation.getParam('title'), nota: rating, backColor: navigation.getParam('backColor')})
  }

  function handleBeforeMain(){
    navigation.navigate('beforeMain');
  }

  function renderItem({item}) {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity onPress={() => handleButton(item.slug, item.nota)}>
          <View style={styles.containerDisp}>
            <Text style={ item.status ? styles.statusOn : styles.statusOf }>
              {item.status ? <>Aberto</> : <>Fechado</>}
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageDelivery}
                source={{
                  uri:
                    item.foto,
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            <View style={styles.productText}>
              <View style={styles.containerTitle}>
                <Text style={styles.productTitle}>{item.nome}</Text>
              </View>
              <View style={styles.containerDescription}>
                <Text numberOfLines={3} style={styles.productDescription}>
                  {item.descricao_breve}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.containerRating}>
            <RatingStar dis={true} star={item.nota} styles={styles.ratingStar} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function loadMore() {}
  return (
      <View style={styles.container}>
        <TopNav 
          titleHeader={navigation.getParam('title')} 
          isBack={true} 
          colorBack="#e3672b" 
          pressButton={handleBeforeMain}
          />
        <View style={{flex: 1}}>
          <FlatList
            contentContainerStyle={styles.list}
            data={productInfo}
            keyExtractor={(item, index) => `list-item-${index}`}
            renderItem={renderItem}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
  );
}
