import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackTypes} from '../../routes/types';

export default function Details() {
  const navigation = useNavigation<StackTypes>();
  return (
    <View>
      <Text>Pagina Detalhes do usuario</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
