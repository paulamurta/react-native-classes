import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {globalStyles} from './src/assets/styles';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaView style={globalStyles.background}>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
