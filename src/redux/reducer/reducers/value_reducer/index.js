import {ACTION_UP, ACTION_DOWN} from '../../../../constants';

const value_reducer = (state = 1001, action) => {
  if (action.type === ACTION_UP) {
    return state + 1;
  }
  if (action.type === ACTION_DOWN) {
    return state - 1;
  }
  return state;
};

export default value_reducer;
