import { combineReducers } from 'redux';
import User from './User';
import Counter from './Counter';
const allReducers = combineReducers({
  User,
  Counter,
});
export default allReducers;
