import { SET_MESSAGE } from './types';

export const setMessage = (message) => dispatch => {
  dispatch({
      type: SET_MESSAGE,
      payload: message
  });
};