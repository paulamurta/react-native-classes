import {Button, Text, View} from 'react-native';
import {HomeScreenProps} from './types';

export default function Home({navigation}: HomeScreenProps) {
  return (
    <View>
      <Text>Tela Home</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}
