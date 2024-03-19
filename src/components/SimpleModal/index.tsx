import {Modal, Pressable, Switch, Text, View, Alert} from 'react-native';
import {SimpleModalProps} from './types';
import {modalStyles} from './styles';

export default function SimpleModal({
  isModalOn,
  setIsModalOn,
}: SimpleModalProps) {
  return (
    <Modal transparent={true} animationType="slide" visible={isModalOn}>
      <View style={modalStyles.modal}>
        <View style={modalStyles.content}>
          <Text style={modalStyles.modalTxt}>Seja bem-vindo!</Text>
          <Pressable
            onPress={() => setIsModalOn(false)}
            style={modalStyles.modalBtn}>
            <Text style={modalStyles.modalBtnTxt}>Fechar modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
