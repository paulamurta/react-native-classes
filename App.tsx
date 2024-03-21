import React from 'react';
import {SafeAreaView} from 'react-native';
import {globalStyles} from './src/assets/styles';
import Pizza from './src/pages/Pizza';
import Instagram from './src/pages/Instagram';
import AsyncStoragePage from './src/pages/AsyncStorage';
import Movies from './src/pages/Movies';
import Feed from './src/pages/Feed';
import Animations from './src/pages/Animations';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.background}>
      {/* <Feed /> */}
      {/* <Instagram /> */}
      {/* <Pizza /> */}
      <AsyncStoragePage />
      {/* <Movies /> */}
      {/* <Animations /> */}
    </SafeAreaView>
  );
}
