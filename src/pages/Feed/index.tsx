import React, {Component, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  Pressable,
} from 'react-native';
import {feedStyles} from './styles';
import {IPerson} from '../../components/Person/types';
import PersonCard from '../../components/Person';

export default function Feed() {
  const [status, setStatus] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [feed, setFeed] = useState<IPerson[]>([
    {id: 1, name: 'Matheus', age: 20, email: 'matheus@matheus.com'},
    {id: 2, name: 'Joana', age: 30, email: 'joana@joana.com'},
    {id: 3, name: 'Henrique', age: 55, email: 'henrique@henrique.com'},
    {id: 4, name: 'Renata', age: 25, email: 'renata@renata.com'},
    {id: 5, name: 'Marcelo', age: 22, email: 'marcelo@marcelo.com'},
    {id: 6, name: 'Jonas', age: 19, email: 'jonas@jonas.com'},
    {id: 7, name: 'Priscila', age: 27, email: 'priscila@priscila.com'},
  ]);

  useEffect(() => {}, []);

  function handleNameInput(value: string) {
    setName(value);
  }

  function handleButton() {
    !name && !status ? Alert.alert('Digite seu nome!') : setStatus(!status);
  }

  function renderPerson({item}: {item: IPerson}) {
    return (
      <PersonCard
        id={item.id}
        name={item.name}
        age={item.age}
        email={item.email}
      />
    );
  }

  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.header}>
        <Text style={{fontSize: 15}}>
          Você está {status ? 'logado' : 'deslogado'}!
        </Text>

        <Text style={{fontSize: 20}}>
          {name && status ? `Bem-vindo(a), ${name}!` : ''}
        </Text>

        <View style={feedStyles.search}>
          <TextInput
            editable={!status}
            style={feedStyles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={handleNameInput}
            value={name}
          />
          <Pressable
            disabled={status}
            style={feedStyles.button}
            onPress={() => {
              setName('');
            }}>
            <Text style={feedStyles.textButton}>Limpar</Text>
          </Pressable>
        </View>

        <View style={feedStyles.buttonView}>
          <Button
            title={status ? 'Sair' : 'Entrar'}
            onPress={handleButton}></Button>
        </View>
      </View>

      <ScrollView
        style={feedStyles.scrollView}
        contentContainerStyle={feedStyles.scrollContent}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <View style={feedStyles.box1} />
        <View style={feedStyles.box1} />
        <View style={feedStyles.box1} />
        <View style={feedStyles.box1} />
        <View style={feedStyles.box1} />
        <View style={feedStyles.box1} />
      </ScrollView>

      <View style={feedStyles.flatView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={feedStyles.flatlistContent}
          data={feed}
          renderItem={renderPerson}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}
