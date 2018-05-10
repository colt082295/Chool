/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_NOTES_PENDING,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_NOTE_PENDING,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE,
  ADD_NOTE_PENDING,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
} from '../constants';

export const fetchNotes = () => dispatch => {
  dispatch({
    type: FETCH_NOTES_PENDING,
  });
  axios({
    method: 'GET',
    url: 'http://localhost:3005/notes',
  })
    .then(note =>
      dispatch({
        type: FETCH_NOTES_SUCCESS,
        payload: note.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_NOTES_FAILURE,
        payload: err,
      }),
    );
};

export const fetchNote = params => dispatch => {
  dispatch({
    type: FETCH_NOTE_PENDING,
  });
  axios({
    method: 'GET',
    url: `http://localhost:3005/notes/${params.id}`,
  })
    .then(note =>
      dispatch({
        type: FETCH_NOTE_SUCCESS,
        payload: note.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_NOTE_FAILURE,
        payload: err,
      }),
    );
};

export const addNote = noteObj => dispatch => {
  dispatch({
    type: ADD_NOTE_PENDING,
  });
  axios({
    method: 'POST',
    url: `http://localhost:3005/notes`,
    data: noteObj,
  })
    .then(note =>
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: note.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: ADD_NOTE_FAILURE,
        payload: err,
      }),
    );
};
