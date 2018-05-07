import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import home from './home';
import assignment from './assignment';

export default combineReducers({
  user,
  runtime,
  home,
  assignment,
});
