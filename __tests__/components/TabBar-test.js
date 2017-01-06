import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TabBar from '../../js/components/TabBar';

// The TabBar is responsible for returning a MapView, so
// react-native-maps is needed, as well as initial props.

jest.mock('react-native-scrollable-tab-view', () => 'ScrollableTabView');
jest.mock('react-native-maps', () => 'MapView');
jest.mock('../../js/components/Map/EventMarker', () => 'EventMarker');

const props = {
  map: {
    modalVisibility: false,
    modalDetails: null,
    events: [
      {
        event_id: '12345',
        id: '12345',
        title: 'This is a test event',
        description: 'test test test',
        location: 'Location 123',
        starts: 'midnight',
        ends: 'midnight',
        category: 'Sports'
      }
    ]
  },
  mapActions: {
    fetchInitialEvents: jest.fn()
  }
};

describe('TabBar', () => {
  it('renders correctly', () => {
    const tabBar = renderer.create(
      <TabBar {...props} />
    ).toJSON();
    expect(tabBar).toMatchSnapshot();
  });
});
