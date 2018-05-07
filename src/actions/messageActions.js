/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_MESSAGE_PENDING,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
} from '../constants';

export const fetchMessage = params => dispatch => {
  dispatch({
    type: FETCH_MESSAGE_PENDING,
  });
  axios({
    method: 'GET',
    url: `http://localhost:3005/messages/${params.id}`,
  })
    .then(message =>
      dispatch({
        type: FETCH_MESSAGE_SUCCESS,
        payload: message.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_MESSAGE_FAILURE,
        payload: err,
      }),
    );
};
