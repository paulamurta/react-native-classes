import {useEffect, useState} from 'react';
import {Alert, Keyboard, Pressable, Text, TextInput, View} from 'react-native';
import {asyncStorageStyles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default function AsyncStoragePage() {
  const [input, setInput] = useState<string>('');
  const [name, setName] = useState<string>('');

  //! monta componente >> pega nome do storage
  useEffect(() => {
    async function fetchName() {
      const storedName = await AsyncStorage.getItem('nome');
      if (storedName) {
        setName(storedName);
        console.log(storedName);
      }
    }
    fetchName();
  }, []);

  //! atualiza storage toda vez q name mudar
  useEffect(() => {
    async function saveNameToStorage() {
      await AsyncStorage.setItem('nome', name);
    }
    saveNameToStorage();
  }, [name]);

  function handleInput(value: string) {
    setInput(value);
  }

  //! botão acionado >> pega input e aplica no name e no storage
  async function saveName() {
    setName(input);
    await AsyncStorage.setItem('nome', input);
    Alert.alert('Salvo com sucesso');
    Keyboard.dismiss();
  }

  return (
    <View style={asyncStorageStyles.container}>
      <View style={asyncStorageStyles.inputContainer}>
        <TextInput
          style={asyncStorageStyles.input}
          value={input}
          onChangeText={handleInput}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
        />
        <Pressable onPress={saveName}>
          <Text style={asyncStorageStyles.button}>+</Text>
        </Pressable>
      </View>
      <Text style={asyncStorageStyles.nameText}>Olá, {name}!</Text>
    </View>
  );
}
