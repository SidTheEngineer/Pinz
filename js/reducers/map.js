import * as types from '../actions/types';

const initialState = {
  events: [],
  loading: false,
  modalVisibility: false,
  modalDetails: null
};

const map = (state = initialState, action) => {
  const {
    type,
    loading,
    events,
    modalVisibility,
    modalDetails
  } = action;

  switch (type) {
    case types.PENDING_CALL:
    case types.FAILED_CALL:
      return Object.assign({}, state, { loading });
    case types.RECEIVE_INITIAL_EVENTS:
      return Object.assign({}, state, { loading, events });
    case types.SHOW_EVENT_MODAL:
      return Object.assign({}, state, { modalVisibility, modalDetails });
    default:
      return state;
  }
};

export default map;
