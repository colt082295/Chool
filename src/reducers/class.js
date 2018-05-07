import {
  FETCH_CLASS_PENDING,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  class: {},
  error: null,
};

export default function classInfo(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLASS_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        class: action.payload,
        fetching: false,
      };
    case FETCH_CLASS_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
