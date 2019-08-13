import React from 'react';

import { SafeAreaView, ScrollView } from 'react-native';
import SearchBarC from '../../components/searchBar';

import styles from './styles';

export default function Search() {
  return (
    <SafeAreaView>
      <SearchBarC />
      <ScrollView />
    </SafeAreaView>
  );
}
