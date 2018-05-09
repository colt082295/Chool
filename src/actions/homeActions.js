/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_BASIC_LIST_PENDING,
  UPDATE_BASIC_LIST_SUCCESS,
  UPDATE_BASIC_LIST_FAILURE,
} from '../constants';

export const fetchDashboard = () => dispatch => {
  dispatch({
    type: FETCH_POSTS_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/dashboard',
  })
    .then(posts =>
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: err,
      }),
    );
};

export const updateBasicListSettings = (id, settingsArr) => dispatch => {
  dispatch({
    type: UPDATE_BASIC_LIST_PENDING,
  });
  axios({
    method: 'PATCH',
    url: `http://localhost:3005/dashboard/${id}`,
    headers: { 'Content-Type': 'application/json' },
    data: {
      settings: settingsArr,
    },
  })
    .then(settings =>
      dispatch({
        type: UPDATE_BASIC_LIST_SUCCESS,
        payload: settings.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: UPDATE_BASIC_LIST_FAILURE,
        payload: err,
      }),
    );
};
