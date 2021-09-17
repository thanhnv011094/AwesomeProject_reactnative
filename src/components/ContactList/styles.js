import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 22,
  },
  viewItem: {
    borderBottomWidth: 2,
    padding: 20,
    flexDirection: 'row',
  },
  textItem1: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    fontSize: 18,
    height: 44,
    borderRightWidth: 3,
  },
  textItem2: {
    flex: 3,
    justifyContent: 'center',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default styles;
