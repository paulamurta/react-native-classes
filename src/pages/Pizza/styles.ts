import {StyleSheet} from 'react-native';

export const pizzaStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'beige',
    height: 100,
  },
  modalTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  pizzas: {
    fontSize: 20,
    textAlign: 'center',
  },
  openModalBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  openModalTxt: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'orange',
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: '#ebe2d7',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
