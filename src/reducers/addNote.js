import {
  ADD_NOTE_PENDING,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
} from '../constants';

const initialState = {
  adding: false,
  added: true,
  note: {},
  error: null,
};

export default function addNote(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE_PENDING:
      return {
        ...state,
        adding: true,
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        addNote: action.payload,
        added: true,
        adding: false,
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        adding: false,
      };
    default:
      return state;
  }
}
