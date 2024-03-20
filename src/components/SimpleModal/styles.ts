import {StyleSheet} from 'react-native';

export const modalStyles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  content: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 40,
    gap: 20,
    justifyContent: 'center',
    elevation: 5,
  },
  modalTxt: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalBtnTxt: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'orange',
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
