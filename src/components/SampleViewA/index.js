import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class SampleViewA extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>View A2</Text>
      </View>
    );
  }
}

export default SampleViewA;
