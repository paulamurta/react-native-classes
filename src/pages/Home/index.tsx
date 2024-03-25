import {Button, Text, View} from 'react-native';
import {homeStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/types';

export default function Home() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={homeStyles.container}>
      <Text>Tela Home</Text>
      <Button
        title="About"
        onPress={() =>
          navigation.navigate('About', {
            name: 'Paula',
            email: 'paulamurta@hotmail.com',
          })
        }
      />
      <Button title="Detalhes" onPress={() => navigation.navigate('Details')} />
      {/* <Button title="Abrir Menu" onPress={() => navigation.openDrawer()} /> */}
    </View>
  );
}
