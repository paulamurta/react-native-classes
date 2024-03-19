import {StyleSheet} from 'react-native';

export const postCardStyles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center',
  },
  viewPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
    gap: 10,
  },
  iconelike: {
    width: 33,
    height: 33,
  },
  btnSend: {},
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
});
