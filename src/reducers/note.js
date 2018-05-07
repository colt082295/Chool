import {
  FETCH_NOTE_PENDING,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  note: {},
  error: null,
};

export default function note(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTE_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_NOTE_SUCCESS:
      return {
        ...state,
        note: action.payload,
        fetching: false,
      };
    case FETCH_NOTE_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
