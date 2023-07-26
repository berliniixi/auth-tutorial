//defining two action creator functions for Redux. These action creators create actions that can be dispatched to update the Redux store

import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const getMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
