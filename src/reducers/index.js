import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import home from './home';
import homeUpdateBasicList from './homeUpdateBasicList';
import assignment from './assignment';
import grade from './grade';
import message from './message';
import messages from './messages';
import note from './note';
import addNote from './addNote';
import notes from './notes';
import classInfo from './class';
import classes from './classes';

export default combineReducers({
  user,
  runtime,
  home,
  homeUpdateBasicList,
  assignment,
  grade,
  message,
  messages,
  note,
  addNote,
  notes,
  classInfo,
  classes,
});
