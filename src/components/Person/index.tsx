import {Text, View} from 'react-native';
import {personStyles} from './styles';
import {IPerson} from './types';

export default function PersonCard({name, age, email}: IPerson) {
  return (
    <View style={personStyles.personCard}>
      <Text style={personStyles.personText}>Nome: {name}</Text>
      <Text style={personStyles.personText}>Idade: {age}</Text>
      <Text style={personStyles.personText}>E-mail: {email}</Text>
    </View>
  );
}
