import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View,  
  Text, 
  FlatList, 
  TouchableOpacity,
  ActivityIndicator  
} from 'react-native';
import { CheckBox } from 'react-native-elements'

import API from '../../../services/api';

import TopNav from '../../../components/topNav';

import styles from './styles';

export default function MountRequestStage2({navigation}) {
  const [codimentos, setCodimentos] = useState([]);
  const [listSelect, setListSelect] = useState([]);
  const [counter, setCounter] = useState('');
  const [page, setPage] = useState(1);
  const [lastIDR, setLastIDR] = useState(0);

  useEffect(() => {
    getCodimentos();
  }, [])

  useEffect(() => {
    handleCounter();  
  }, [listSelect])

  function handleMountRequest(){
    navigation.navigate('mountRequest');
  }

  async function getCodimentos(){
    if(page===1){
      try{
        const {data: {results}} = await API.get(`/api/codimentos/?page=${page}`);
        getChecked(results);
      }catch(err){

      }
    }else{
      try{
        const {data: {results}} = await API.get(`/api/codimentos/?page=${page}`);
        getCheckedTwo(results)
      }
      catch(err){

      }
    }
  }

  function getChecked(e){
    e.forEach((element, index, elements) => {
      element.idR = index;
      element.isChecked = false;
      if(elements.length-1 === index){
        setCodimentos(elements);
      }
    });
  }

  function getCheckedTwo(e){
    let lastIDR = codimentos.length;
    for (let index = 0; index < e.length; index++) {
      let element = e[index];
      element.idR = lastIDR;
      element.isChecked = false;
      lastIDR++;
    }
    setCodimentos([...codimentos, ...e]);

  }

  function removeListChecked(item){

    const listSelectR = [...listSelect];
    listSelectR.forEach((element, index, elements) => {
      if(element.idR === item.idR){
        elements.splice(elements.indexOf(item), 1);
        setListSelect(elements);
      }
    });
  }

  function handleIsChecked(item){
    const codimentosR = [...codimentos];
    if(!item.isChecked){
      codimentosR[item.idR].isChecked = !codimentosR[item.idR].isChecked;
      setListSelect([...listSelect, codimentosR[item.idR]]);
    }else{
      removeListChecked(item);
    }
    setCodimentos(codimentosR);

  }

  function handleCounter(){
    setCounter(listSelect.length);
  }

  function renderItem({item}) {
    return (
      <CheckBox
        onPress={() => handleIsChecked(item)}
        onIconPress={() => handleIsChecked(item)}
        left
        iconLeft
        title={item.nome}
        containerStyle={styles.containerCheckBox}
        checkedColor={navigation.getParam('backColor')}
        checked={item.isChecked}
      />
    );
  }

  function loadMore(){
    console.log('foi');
    setPage(page+1);
    getCodimentos();
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerButtonNextBefore}>
        <TouchableOpacity style={styles.containerButtonBefore} onPress={() => handleMountRequest()}>
          <Text style={styles.textBefore}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButtonNext}>
          <Text style={styles.textNext}>Avançar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textTitle}>Escolha os acompanhamentos para o seu açaí.</Text>
        <Text style={styles.subtitle}>Você pode escolher apenas 5 opções.</Text>
      </View>
      <FlatList
        containerStyle={{flex: 1}}
        data={codimentos}
        keyExtractor={(item, index) => `list-item-${index}`}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={2}
      />
      <View style={styles.containerCounter}>
        <Text style={[
          styles.textCounter, 
          {
            borderColor: navigation.getParam('backColor'), 
            color: navigation.getParam('backColor')
          }
          ]}>
          {counter}/5
        </Text>
      </View>
    </SafeAreaView>
  );
}
