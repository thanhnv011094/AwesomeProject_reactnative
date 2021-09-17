import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

class Section extends Component {
  render() {
    // const {width, height, backgroundColor} = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.backgroundColor,
          },
        ]}>
        <Text style={styles.red}>jusxt redxx</Text>
        <Text style={styles.bigBlue}>just bxigBlue111</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBluex, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red,1 then bigBlue</Text>
      </View>
    );
  }
}

export default Section;
