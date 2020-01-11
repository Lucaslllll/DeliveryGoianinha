import React, { useState, useEffect } from 'react';

import {
  FlatList, 
  Image, 
  View, 
  SafeAreaView,
  Text, 
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native';

import Lottie from 'lottie-react-native';

import API from '../../services/api';

import { SearchBar } from 'react-native-elements';

import RatingStar from '../../components/ratingStar';


import styles from './styles';


import search from '../../assets/animate/search.json';
import loading from '../../assets/animate/loading.json';

export default function Search({navigation}) {
  const [searchS, setSearchS] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoResults, setIsNoResults] = useState(false);

  useEffect(() => {
    if(searchS.length >= 1){
      setIsSearch(true);
      handleSearch();
    }else{
      setIsSearch(false);
    }
  }, [searchS])

  function handleDelivery(e, rating){
    navigation.navigate('Delivery', {slug: e, title: navigation.getParam('title'), nota: rating, backColor: navigation.getParam('backColor')})
  }

  async function handleSearch(){
    setIsLoading(true);
    try{
      const {data: {restaurante}} = await API.get(`/api/buscar/${searchS}`);
      if(restaurante.length){
        restaurante.forEach(async (delivery, index, deliverys) => {
          const {data: {nota}} = await API.get(`/api/classificacao_restaurante_final/${delivery.slug}`);
          delivery.nota = nota;
          if(index === deliverys.length-1){
            setSearchResult(deliverys);
            setIsLoading(false);
            setIsNoResults(false);
          }
        });
      }
      else{
        setSearchResult([]);
        setIsLoading(true);
        setIsNoResults(true);
      }
    }catch(err){
      setSearchResult([]);
      setIsLoading(false);
    }
  }

  function updateSearch(searchS){
    setSearchS(searchS);
  };

  function renderItem({item}) {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity onPress={() => handleDelivery(item.slug, item.nota)}>
          <View style={styles.containerDisp}>
            <Text style={ item.status ? styles.statusOn : styles.statusOf }>
              {item.status ? <>Aberto</> : <>Fechado</>}
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageDelivery}
                resizeMode='contain'
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <SearchBar
        containerStyle={styles.containerSearchS}
        inputStyle={styles.inputSearch}
        leftIconContainerStyle={styles.inputSearch}
        rightIconContainerStyle={styles.inputSearch}
        inputContainerStyle={styles.inputSearch}
        placeholder="Pesquisar"
        showLoading={false}
        onChangeText={updateSearch}
        value={searchS}
        underlineColorAndroid={'#EEEEEE'}
        lightTheme={false}
      />
      { isSearch ?
        isLoading
        ?
          <View style={styles.containerLoading}>
            <Lottie 
              loop={!isNoResults} 
              autoPlay={true} 
              resizeMode='contain' 
              source={loading} 
              style={styles.animateLoading}
            />
            {
                isNoResults
              ?
                <Text style={styles.textIsNoLoading}>Sem resultados!</Text>
              :
                <></>
            }
          </View>
        :
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={styles.list}
              data={searchResult}
              keyExtractor={(item, index) => `list-item-${index}`}
              renderItem={renderItem}
              onEndReached={loadMore}
              onEndReachedThreshold={0.1}
            />
          </View>
      :
      <View style={styles.containerSearch}>
        <Lottie 
          loop={false} 
          autoPlay={true} 
          resizeMode='contain' 
          source={search} 
          style={{width: 
            250, height: 250, borderBottomColor: 'black', borderBottomWidth: 15}}
          />
          <View style={styles.containerFilter}>
            <TouchableOpacity style={[styles.containerBtnFilter, {borderColor: '#000'}]}>
              <Text style={[styles.textBtnFilter, {color: '#000'}]}>Entrega gratuita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.containerBtnFilter, {borderColor: '#000'}]}>
              <Text style={[styles.textBtnFilter, {color: '#000'}]}>Promoções</Text>
            </TouchableOpacity>
          </View>
      </View>
      }
    </SafeAreaView>
  );
}