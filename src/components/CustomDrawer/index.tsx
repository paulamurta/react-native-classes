import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import perfil from '../../assets/images/perfil.png';
import {View, Text, Image} from 'react-native';
import {customDrawerStyles} from './styles';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1}} {...props}>
      <View style={customDrawerStyles.container}>
        <Image source={perfil} style={{width: 65, height: 65}} />
        <Text style={customDrawerStyles.text}>Bem-vindo!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
