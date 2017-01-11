import 'react-native';

import * as mapActions from '../../js/actions/map';
import mapReducer from '../../js/reducers/map';

const initialState = {
  events: [],
  loading: false,
  modalVisibility: false,
  modalDetails: null
};
const events = { test: 'test' };
const modalDetails = 'test';
const modalVisibility = true;

describe('Map reducer', () => {
  it('should return initial state', () => {
    expect(mapReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle a PENDING_CALL', () => {
    expect(mapReducer(initialState, mapActions.pendingCall())).toEqual(
      Object.assign({}, initialState, { loading: true })
    );
  });

  it('should handle a FAILED_CALL', () => {
    expect(mapReducer(initialState, mapActions.failedCall())).toEqual(
      Object.assign({}, initialState, { loading: false })
    );
  });

  it('should RECEIVE_INITIAL_EVENTS', () => {
    expect(mapReducer(initialState, mapActions.receiveInitialEvents(events))).toEqual(
      Object.assign({}, initialState, { loading: false, events })
    );
  });

  it('should SHOW_EVENT_MODAL', () => {
    expect(mapReducer(initialState, mapActions.showEventModal(modalVisibility, modalDetails)))
      .toEqual(Object.assign({}, initialState, { modalVisibility, modalDetails }));
  });
});
