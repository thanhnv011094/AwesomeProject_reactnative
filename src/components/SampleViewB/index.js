import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class SampleViewB extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>View B2</Text>
      </View>
    );
  }
}

export default SampleViewB;
