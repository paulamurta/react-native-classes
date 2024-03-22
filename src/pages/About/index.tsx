import {Button, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList, StackTypes} from '../../router/types';

//esse tipo de interface abaixo so vai existir se precisar do {route} como prop do componente, pra tipar ele
// interface AboutProps {
//   route: RouteProp<RootStackParamList, 'About'>;
// }

export default function About() {
  const navigation = useNavigation<StackTypes>();
  const route = useRoute<RouteProp<RootStackParamList, 'About'>>();
  return (
    <View>
      <Text>Tela About</Text>
      <Text>Nome: {route.params?.name}</Text>
      <Text>Email: {route.params?.email}</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
