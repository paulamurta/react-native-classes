import {StyleSheet} from 'react-native';

export const asyncStorageStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  inputContainer: {
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#888181',
    fontSize: 20,
    width: '80%',
    textAlign: 'center',
    //! paddingVertical 0 para inputs de altura pequenas
    paddingVertical: 0,
  },
  nameText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 18,
    width: 50,
    height: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    padding: 0,
  },
});
