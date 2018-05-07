/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
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
