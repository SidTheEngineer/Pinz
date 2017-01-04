import axios from 'axios';

const PENDING_CALL = 'PENDING_CALL';
const FAILED_CALL = 'FAILED_CALL';
const RECEIVE_INITIAL_EVENTS = 'RECEIVE_INITIAL_EVENTS';
const SHOW_EVENT_MODAL = 'SHOW_EVENT_MODAL';

export const pendingCall = () => ({
  type: PENDING_CALL,
  loading: true
});

export const failedCall = () => ({
  type: FAILED_CALL,
  loading: false
});

export const receiveInitialEvents = events => ({
  type: RECEIVE_INITIAL_EVENTS,
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

export const showEventModal = modalVisibility => ({
  type: SHOW_EVENT_MODAL,
  modalVisibility
});
