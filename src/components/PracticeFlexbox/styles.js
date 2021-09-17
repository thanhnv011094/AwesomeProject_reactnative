import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },

  child1: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
    height: '70%',
  },

  child1_1: {
    flexDirection: 'column',
    width: '25%',
    height: '100%',
  },
  child1_1_1: {
    // backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 3,
  },
  child1_1_2: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    flex: 7,
  },

  child1_2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    width: '75%',
    height: '100%',
  },

  child2: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: '100%',
    height: '30%',
  },
  child2_1: {
    backgroundColor: 'blue',
    width: '30%',
    height: '100%',
  },
  child2_2: {
    width: '50%',
    height: '100%',
  },
  child2_3: {
    flexDirection: 'column',
    width: '20%',
    height: '100%',
  },
  child2_3_1: {
    width: '100%',
    height: '50%',
  },
  child2_3_2: {
    width: '100%',
    height: '50%',
    backgroundColor: 'yellow',
  },

  border: {
    borderWidth: 2,
  },
});

export default styles;
