import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';

import Header from './components/Header';
import Restaurants from './components/Restaurants';
import Search from './components/Search';




function App() {

  const [search, setSearch] = useState(null)

  return (
    <View style={styles.container}>
      <Header />
  
      <Search />
      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
