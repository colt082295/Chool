/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_CLASSES_PENDING,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  FETCH_CLASS_PENDING,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
} from '../constants';

export const fetchClasses = () => dispatch => {
  dispatch({
    type: FETCH_CLASSES_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/classes',
  })
    .then(classes =>
      dispatch({
        type: FETCH_CLASSES_SUCCESS,
        payload: classes.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_CLASSES_FAILURE,
        payload: err,
      }),
    );
};

export const fetchClass = () => dispatch => {
  dispatch({
    type: FETCH_CLASS_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/class',
  })
    .then(classInfo =>
      dispatch({
        type: FETCH_CLASS_SUCCESS,
        payload: classInfo.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_CLASS_FAILURE,
        payload: err,
      }),
    );
};
