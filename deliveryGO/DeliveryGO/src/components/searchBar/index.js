import React, { useState } from "react";

import { SearchBar } from "react-native-elements";
import styles from "./styles";

export default function SearchBarC(){
  const [search, setSearch] = useState('');
 
  function updateSearch(search){
    setSearch(search);
  };

  return (
    <SearchBar
      containerStyle={styles.containerSearch}
      inputStyle={styles.inputSearch}
      leftIconContainerStyle={styles.inputSearch}
      rightIconContainerStyle={styles.inputSearch}
      inputContainerStyle={styles.inputSearch}
      placeholder="Pesquisar"
      showLoading={false}
      onChangeText={updateSearch}
      value={search}
      underlineColorAndroid={'#EEEEEE'}
      lightTheme={false}
    />
  );
}