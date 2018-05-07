import {
  FETCH_ASSIGNMENTS_PENDING,
  FETCH_ASSIGNMENTS_SUCCESS,
  FETCH_ASSIGNMENTS_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  assignments: [],
  error: null,
};

export default function assignment(state = initialState, action) {
  switch (action.type) {
    case FETCH_ASSIGNMENTS_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_ASSIGNMENTS_SUCCESS:
      return {
        ...state,
        assignments: action.payload,
        fetching: false,
      };
    case FETCH_ASSIGNMENTS_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
