import {
  FETCH_GRADES_PENDING,
  FETCH_GRADES_SUCCESS,
  FETCH_GRADES_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  grades: [],
  error: null,
};

export default function grade(state = initialState, action) {
  switch (action.type) {
    case FETCH_GRADES_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_GRADES_SUCCESS:
      return {
        ...state,
        grades: action.payload,
        fetching: false,
      };
    case FETCH_GRADES_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
