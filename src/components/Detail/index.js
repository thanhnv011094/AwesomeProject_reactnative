import React, {Component} from 'react';
import {View, Text, Button, Modal, Alert, Pressable} from 'react-native';
import styles from './styles';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    const text = this.props.route.params.a;
    const {navigation} = this.props;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{text}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Text>{this.props.route.params.a}</Text> */}
        <Button title="Show modal" onPress={() => this.setModalVisible(true)} />
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
        <Text>xxx</Text>
        <Button
          title="Go to Details again"
          onPress={() =>
            navigation.push('Detail', {a: "Welcome to summoner's rift"})
          }
        />
      </View>
    );
  }
}

export default Detail;
