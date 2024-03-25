import {Button, Text, View} from 'react-native';
import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackParamList, StackTypes} from '../../routes/types';

export default function About() {
  const navigation = useNavigation<StackTypes>();
  const route = useRoute<RouteProp<StackParamList, 'About'>>();
  return (
    <View>
      <Text>Tela About</Text>
      <Text>Nome: {route.params?.name}</Text>
      <Text>Email: {route.params?.email}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Zerar pilha e voltar pra Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}
