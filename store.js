import {createStore} from 'redux';

const conducer = (state = {value: 10}, action) => {
  if (action.type === 'UP') {
    return {value: state.value + 1};
  }
  if (action.type === 'DOWN') {
    return {value: state.value + 1};
  }
  return state;
};

const store = createStore(conducer);
export default store;
