import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ReduxSampleController from '../ReduxSampleController';
import {connect} from 'react-redux';

class ReduxSample extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
          <Text style={styles.value}>{this.props.myValue}</Text>
        </View>
        <ReduxSampleController />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {myValue: state.value};
}

export default connect(mapStateToProps)(ReduxSample);
