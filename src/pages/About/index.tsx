import {Button, Text, View} from 'react-native';

export default function About({navigation}: any) {
  return (
    <View>
      <Text>Tela About</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
