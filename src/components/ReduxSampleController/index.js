import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {up, down} from '../../redux/action_creators/value';

class ReduxSampleController extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.controller}>
        <Text style={styles.controllName}>CONTROLLER COMPONENT</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('xxx');
              this.props.myUp();
            }}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.myDown();
            }}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(null, {
  myUp: up,
  myDown: down,
})(ReduxSampleController);
