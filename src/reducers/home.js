import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_BASIC_LIST_SUCCESS,
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
    /* eslint-disable no-case-declarations */
    case UPDATE_BASIC_LIST_SUCCESS:
      // Return the correct info after the Basic List settings were changed
      return {
        ...state,
        tiles: state.tiles.map(
          tile =>
            tile.id === action.payload.id
              ? { ...tile, settings: action.payload.settings }
              : tile,
        ),
      };
    default:
      return state;
  }
}
