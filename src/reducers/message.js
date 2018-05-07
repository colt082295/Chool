import {
  FETCH_MESSAGE_PENDING,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  message: [],
  error: null,
};

export default function message(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGE_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        fetching: false,
      };
    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
