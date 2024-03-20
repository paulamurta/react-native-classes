import {StyleSheet} from 'react-native';

export const movieCardStyle = StyleSheet.create({
  card: {
    backgroundColor: '#e3e9ed',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 25,
    gap: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fotoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  foto: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'justify',
    fontSize: 16,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    width: 180,
  },
});
