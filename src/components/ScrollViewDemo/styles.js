import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 80,
  },
  text: {
    fontSize: 100,
  },
});

export default styles;
