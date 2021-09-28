import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  controller: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
    margin: 20,
  },
  controllName: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 25,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
});

export default styles;
