import React, {Component} from 'react';
import {ReduxSample} from './src/components';
import {Provider} from 'react-redux';
import {store} from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxSample />
      </Provider>
    );
  }
}

export default App;
