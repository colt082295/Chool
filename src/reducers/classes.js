import {
  FETCH_CLASSES_PENDING,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  classes: [],
  error: null,
};

export default function classes(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLASSES_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        class: action.payload,
        fetching: false,
      };
    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
