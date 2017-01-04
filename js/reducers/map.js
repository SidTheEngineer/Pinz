const PENDING_CALL = 'PENDING_CALL';
const FAILED_CALL = 'FAILED_CALL';
const RECEIVE_INITIAL_EVENTS = 'RECEIVE_INITIAL_EVENTS';
const SHOW_EVENT_MODAL = 'SHOW_EVENT_MODAL';

const initialState = {
  events: [],
  loading: false,
  modalVisibility: false,
  modalDetails: null
};

const map = (state = initialState, action) => {
  const {
    loading,
    events,
    modalVisibility,
    modalDetails
  } = action;

  switch (action.type) {
    case PENDING_CALL:
    case FAILED_CALL:
      return Object.assign({}, state, { loading });
    case RECEIVE_INITIAL_EVENTS:
      return Object.assign({}, state, { loading, events });
    case SHOW_EVENT_MODAL:
      return Object.assign({}, state, { modalVisibility, modalDetails });
    default:
      return state;
  }
};

export default map;
