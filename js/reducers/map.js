const PENDING_CALL = 'PENDING_CALL';
const FAILED_CALL = 'FAILED_CALL';
const RECEIVE_INITIAL_EVENTS = 'RECEIVE_INITIAL_EVENTS';
const initialState = {
  events: [],
  loading: false
};

const map = (state = initialState, action) => {
  const { loading, events } = action;

  switch (action.type) {
    case PENDING_CALL:
    case FAILED_CALL:
      return Object.assign({}, state, { loading });
    case RECEIVE_INITIAL_EVENTS:
      return Object.assign({}, state, { loading, events });
    default:
      return state;
  }
};

export default map;
