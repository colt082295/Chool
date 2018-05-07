/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_GRADES_PENDING,
  FETCH_GRADES_SUCCESS,
  FETCH_GRADES_FAILURE,
} from '../constants';

export const fetchGrades = () => dispatch => {
  dispatch({
    type: FETCH_GRADES_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/grades',
  })
    .then(grades =>
      dispatch({
        type: FETCH_GRADES_SUCCESS,
        payload: grades.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_GRADES_FAILURE,
        payload: err,
      }),
    );
};
