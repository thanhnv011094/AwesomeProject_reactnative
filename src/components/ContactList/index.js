import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './styles';
let pageNo = 0;
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    };
    // this._onRefresh = this._onRefresh.bind(this);
  }
  async _onRefresh() {
    this.setState({isLoading: true});
    try {
      const response = await fetch('http://192.168.1.15:5000/TestApi/');
      const json = await response.json();
      console.log(json);
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  async _onEndReached() {
    console.log('_onEndReached');
    this.setState({isLoading: true});
    try {
      const response = await fetch(
        'http://192.168.1.15:5000/TestApi/' + pageNo++,
      );
      const json = await response.json();
      console.log(json);
      this.setState({data: this.state.data.concat(json)});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.isLoading}
          onRefresh={() => {
            this._onRefresh();
          }}
          onEndReached={() => {
            this._onEndReached();
          }}
          onEndReachedThreshold={1}
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.viewItem}>
              <Text style={styles.textItem1}>{item.key}</Text>
              <Text style={styles.textItem2}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  async getData() {
    try {
      this.setState({isLoading: true});
      const response = await fetch('http://192.168.1.15:5000/TestApi/0');
      const json = await response.json();
      console.log(json);
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    this.getData();
  }
}

export default ContactList;
