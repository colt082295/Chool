import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import home from './home';
import assignment from './assignment';
import grade from './grade';
import message from './message';
import messages from './messages';
import note from './note';
import notes from './notes';
import classInfo from './class';
import classes from './classes';

export default combineReducers({
  user,
  runtime,
  home,
  assignment,
  grade,
  message,
  messages,
  note,
  notes,
  classInfo,
  classes,
});
