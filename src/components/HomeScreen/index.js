import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import styles from './styles';

// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.push('Detail', {a: "Welcome to summoner's rift"})
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
