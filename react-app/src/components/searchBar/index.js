import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Pesquise o seu produto!"
        onChangeText={this.updateSearch}
        value={search}
        searchIcon={<Icon
          name='search'
          color='#00aced' />}
      />
    );
  }
}