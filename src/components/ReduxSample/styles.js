import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'violet',
    paddingTop: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  value: {
    color: 'yellow',
    fontSize: 40,
  },
});

export default styles;
