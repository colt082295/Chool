import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  tiles: [],
  error: null,
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        tiles: action.payload,
        fetching: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
