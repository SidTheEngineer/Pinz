import axios from 'axios';

import * as types from './types';

export const pendingCall = () => ({
  type: types.PENDING_CALL,
  loading: true
});

export const failedCall = () => ({
  type: types.FAILED_CALL,
  loading: false
});

export const receiveInitialEvents = events => ({
  type: types.RECEIVE_INITIAL_EVENTS,
  loading: false,
  events
});

export const fetchInitialEvents = () => (
  async (dispatch) => {
    dispatch(pendingCall());

    try {
      const response = await axios.get('http://events.ucf.edu/this-week/feed.json');
      dispatch(receiveInitialEvents(response.data));
    } catch (error) {
      dispatch(failedCall());
    }
  }
);

export const showEventModal = (modalVisibility, modalDetails) => ({
  type: types.SHOW_EVENT_MODAL,
  modalVisibility,
  modalDetails
});
