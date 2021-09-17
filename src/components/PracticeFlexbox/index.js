import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';

class PracticeFlexbox extends Component {
  render() {
    // const {width, height, backgroundColor} = this.props;
    return (
      <View style={[styles.container, styles.border]}>
        <View style={[styles.child1]}>
          <View style={[styles.child1_1, styles.border]}>
            <View style={[styles.child1_1_1, styles.border]} />
            <View style={[styles.child1_1_2, styles.border]} />
          </View>
          <View style={[styles.child1_2, styles.border]}>
            {/* <View
              style={[{width: 100, height: 50, backgroundColor: 'green'}]}
            />
            <View
              style={[{width: 100, height: 200, backgroundColor: 'yellow'}]}
            />
            <View style={[{width: 100, height: 60, backgroundColor: 'blue'}]} /> */}
          </View>
        </View>
        <View style={[styles.child2, styles.border]}>
          <View style={[styles.child2_1, styles.border]} />
          <View style={[styles.child2_2, styles.border]} />
          <View style={[styles.child2_3, styles.border]}>
            <View style={[styles.child2_3_1, styles.border]} />
            <View style={[styles.child2_3_2, styles.border]} />
          </View>
        </View>
      </View>
    );
  }
}

export default PracticeFlexbox;
