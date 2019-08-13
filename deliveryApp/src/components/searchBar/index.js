import React, { Component } from "react";

import { SearchBar } from "react-native-elements";
import styles from "./styles";

export default class SearchBarC extends Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={styles.containerSearch}
        inputStyle={styles.inputSearch}
        leftIconContainerStyle={styles.inputSearch}
        rightIconContainerStyle={styles.inputSearch}
        inputContainerStyle={styles.inputSearch}
        placeholder="Açaí..."
        showLoading={true}
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
