import {StyleSheet} from 'react-native';

export const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  header: {
    justifyContent: 'flex-start',
    width: '100%',
    gap: 10,
  },
  search: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#888181',
    fontSize: 20,
    width: '75%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 15,
    width: '25%',
    height: '100%',
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  scrollView: {
    width: '100%',
    minHeight: 100,
    maxHeight: 100,
  },
  scrollContent: {
    gap: 10,
  },
  box1: {
    backgroundColor: 'peru',
    height: '100%',
    width: 100,
    borderRadius: 100,
    borderColor: '#78dd56',
    borderWidth: 3,
  },
  flatView: {
    flex: 1,
  },
  flatlistContent: {
    gap: 10,
    width: '100%',
    justifyContent: 'flex-start',
  },
});
