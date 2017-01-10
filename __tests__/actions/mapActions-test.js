import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import * as types from '../../js/actions/types';
import * as mapActions from '../../js/actions/map';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Map actions', () => {
  it('should create an action for a pending call', () => {
    const expectedAction = {
      type: types.PENDING_CALL,
      loading: true
    };
    expect(mapActions.pendingCall()).toEqual(expectedAction);
  });

  it('should create an action for a failed call', () => {
    const expectedAction = {
      type: types.FAILED_CALL,
      loading: false
    };
    expect(mapActions.failedCall()).toEqual(expectedAction);
  });

  it('should create an action for receiving events', () => {
    const event = { test: 'test' };
    const expectedAction = {
      type: types.RECEIVE_INITIAL_EVENTS,
      loading: false,
      events: event
    };
    expect(mapActions.receiveInitialEvents(event)).toEqual(expectedAction);
  });

  it('should create an action upon successful api call for events', () => {
    nock('http://events.ucf.edu')
      .get('/this-week/feed.json')
      .reply(200, [{ test: 'test' }]);

    const expectedActions = [
      {
        type: types.PENDING_CALL,
        loading: true
      },
      {
        type: types.RECEIVE_INITIAL_EVENTS,
        loading: false,
        events: [{ test: 'test' }]
      }
    ];

    const store = mockStore({ events: [] });

    return store.dispatch(mapActions.fetchInitialEvents())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should be able to toggle modal visibility', () => {
    const modalVisibility = true;
    const modalDetails = { test: 'test' };
    const expectedAction = {
      type: types.SHOW_EVENT_MODAL,
      modalVisibility,
      modalDetails
    };
    expect(mapActions.showEventModal(modalVisibility, modalDetails)).toEqual(expectedAction);
  });
});
