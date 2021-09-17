import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import SampleViewA from '../SampleViewA';
import SampleViewB from '../SampleViewB';

class CheckBoxEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    // This binding is necessary to make `this` work in the callback
    this.onPressButtonA = this.onPressButtonA.bind(this);
    this.onPressButtonB = this.onPressButtonB.bind(this);
  }
  onPressButtonA() {
    // alert('You tapped the buttonA');
    this.setState({clicked: true});
  }
  onPressButtonB() {
    // alert('You tapped the buttonB');
    this.setState({clicked: false});
  }

  renderElement() {
    if (this.state.clicked === true) {
      return <SampleViewA />;
    }
    return <SampleViewB />;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'column'}}>
          <CheckBox />
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              value={this.state.checked}
              onValueChange={() =>
                this.setState({checked: !this.state.checked})
              }
            />
            <Text style={{marginTop: 5}}> this xxis checkbox</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressButtonA} title="Press A" />
          <Button onPress={this.onPressButtonB} title="Press B" />
        </View>
        <View style={[{borderWidth: 2}]}>
          <View style={styles.container2}>{this.renderElement()}</View>
        </View>
      </View>
    );
  }
}

export default CheckBoxEvent;
