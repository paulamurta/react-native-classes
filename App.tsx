import {SafeAreaView} from 'react-native';
import {globalStyles} from './src/assets/styles';
import React from 'react';
import Navigation from './src/router';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.background}>
      <Navigation />
    </SafeAreaView>
  );
}
