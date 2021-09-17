import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.route.params.a}</Text>
      </View>
    );
  }
}

export default Detail;
