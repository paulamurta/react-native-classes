import {Button, Text, View} from 'react-native';
import {homeStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../router/types';

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
      <Button
        title="Animations"
        onPress={() => navigation.navigate('Animations')}
      />
      <Button
        title="AsyncStoragePage"
        onPress={() => navigation.navigate('AsyncStoragePage')}
      />
      <Button title="Feed" onPress={() => navigation.navigate('Feed')} />
      <Button
        title="Instagram"
        onPress={() => navigation.navigate('Instagram')}
      />
      <Button title="Movies" onPress={() => navigation.navigate('Movies')} />
      <Button title="Pizza" onPress={() => navigation.navigate('Pizza')} />
    </View>
  );
}
