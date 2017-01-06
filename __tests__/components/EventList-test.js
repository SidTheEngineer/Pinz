import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EventList from '../../js/components/EventList';

const props = {
  map: {
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
      },
      {
        event_id: '123456',
        id: '123456',
        title: 'This is a test event',
        description: 'test test test',
        location: 'Location 123',
        starts: 'midnight',
        ends: 'midnight',
        category: 'Sports'
      }
    ]
  }
};

describe('EventList', () => {
  it('renders correctly', () => {
    const eventList = renderer.create(
      <EventList {...props} />
    ).toJSON();
    expect(eventList).toMatchSnapshot();
  });

  it('renders an ActivityIndicator', () => {
    const placeholderView = renderer.create(
      EventList.renderPlaceholderView()
    ).toJSON();

    expect(placeholderView).toMatchSnapshot();
  });
});
