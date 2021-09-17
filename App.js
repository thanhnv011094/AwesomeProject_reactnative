import React, {Component} from 'react';
// import {View, Text} from 'react-native';
import {HomeScreen, Detail, NavigationContainerScreen} from './src/components';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="Detail" component={Detail} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <NavigationContainerScreen />
    );
  }
}

export default App;
