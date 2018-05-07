/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_ASSIGNMENTS_PENDING,
  FETCH_ASSIGNMENTS_SUCCESS,
  FETCH_ASSIGNMENTS_FAILURE,
} from '../constants';

export const fetchAssignments = () => dispatch => {
  dispatch({
    type: FETCH_ASSIGNMENTS_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/assignments',
  })
    .then(posts =>
      dispatch({
        type: FETCH_ASSIGNMENTS_SUCCESS,
        payload: posts.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_ASSIGNMENTS_FAILURE,
        payload: err,
      }),
    );
};
