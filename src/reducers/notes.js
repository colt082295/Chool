import {
  FETCH_NOTES_PENDING,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  notes: [],
  error: null,
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        fetching: false,
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
