import {
  FETCH_MESSAGES_PENDING,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  messages: [],
  error: null,
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        fetching: false,
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
