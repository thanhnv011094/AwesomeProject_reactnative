import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

class ReduxSampleController extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.controller}>
        <Text style={styles.controllName}>CONTROLLER COMPONENT</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.dispatch({type: 'UP'});
            }}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.dispatch({type: 'DOWN'});
            }}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(ReduxSampleController);
