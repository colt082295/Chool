import {
  UPDATE_BASIC_LIST_PENDING,
  UPDATE_BASIC_LIST_SUCCESS,
  UPDATE_BASIC_LIST_FAILURE,
} from '../constants';

const initialState = {
  fetching: false,
  fetched: true,
  tile: {},
  error: null,
};

export default function homeUpdateBasicList(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BASIC_LIST_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case UPDATE_BASIC_LIST_SUCCESS:
      return {
        ...state,
        tile: action.payload,
        fetching: false,
      };
    case UPDATE_BASIC_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
