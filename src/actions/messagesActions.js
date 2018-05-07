/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_MESSAGES_PENDING,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
} from '../constants';

export const fetchMessages = () => dispatch => {
  dispatch({
    type: FETCH_MESSAGES_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/messages',
  })
    .then(assignment =>
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: assignment.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_MESSAGES_FAILURE,
        payload: err,
      }),
    );
};
