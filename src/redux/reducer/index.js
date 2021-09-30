import {combineReducers} from 'redux';
import value from './reducers/value_reducer';

const reducer = combineReducers({
  value,
});

export default reducer;
