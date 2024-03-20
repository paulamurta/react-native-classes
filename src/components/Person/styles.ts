import {StyleSheet} from 'react-native';

export const personStyles = StyleSheet.create({
  personCard: {
    backgroundColor: 'mistyrose',
    minWidth: '100%',
    minHeight: 100,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  personText: {
    fontSize: 18,
  },
  personFlatlist: {
    gap: 10,
    width: '100%',
    justifyContent: 'flex-start',
  },
});
