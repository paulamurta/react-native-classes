import {useEffect, useState} from 'react';
import {pizzaStyles} from './styles';
import {Modal, Pressable, Switch, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {IPizza} from './types';
import SimpleModal from '../../components/SimpleModal';

export default function Pizza() {
  const [options, setOptions] = useState<IPizza[]>([
    {key: 1, nome: 'Strogonoff', valor: 35.9},
    {key: 2, nome: 'Calabresa', valor: 59},
    {key: 3, nome: 'Quatro queijos', valor: 37},
    {key: 4, nome: 'Brigadeiro', valor: 25.7},
    {key: 5, nome: 'Portuguesa', valor: 70},
  ]);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  function handlePicker(value: number) {
    setSelectedOption(value);
  }

  function handleSwitch() {
    setStatus(!status);
  }

  return (
    <View style={pizzaStyles.container}>
      <SimpleModal isModalOn={isModalOn} setIsModalOn={setIsModalOn} />

      <Text style={pizzaStyles.logo}>Menu Pizza</Text>

      <Pressable
        onPress={() => setIsModalOn(true)}
        style={pizzaStyles.openModalBtn}>
        <Text style={pizzaStyles.openModalTxt}>Abrir modal</Text>
      </Pressable>

      <Picker
        selectedValue={selectedOption}
        onValueChange={handlePicker}
        style={pizzaStyles.picker}>
        {options.map(option => (
          <Picker.Item
            key={option.key}
            value={option.key}
            label={option.nome}
          />
        ))}
      </Picker>

      <Text style={pizzaStyles.pizzas}>
        {selectedOption
          ? `Você escolheu: ${
              options.find(option => option.key === selectedOption)?.nome
            }`
          : ''}
      </Text>

      <View style={pizzaStyles.statusRow}>
        <Text style={pizzaStyles.statusText}>
          Você está {status ? 'ativo' : 'inativo'}
        </Text>

        <Switch
          value={status}
          onValueChange={handleSwitch}
          trackColor={{false: '#484848', true: '#266632'}}
          thumbColor={status ? '#78b44a' : '#ababab'}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
    </View>
  );
}
