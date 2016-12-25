import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TabBar from '../js/components/TabBar';

jest.mock('react-native-scrollable-tab-view', () => 'ScrollableTabView');
jest.mock('react-native-maps', () => 'MapView');

// The TabBar is responsible for returning a MapView, so
// react-native-maps is needed, as well as the initialRegion as a prop.
const mapProps = {
  initialRegion: {
    latitude: 28.601660,
    longitude: -81.200788,
    latitudeDelta: 0.0206,
    longitudeDelta: 0.014
  }
};

describe('TabBar', () => {
  it('renders correctly', () => {
    const tabBar = renderer.create(
      <TabBar map={mapProps} />
    ).toJSON();
    expect(tabBar).toMatchSnapshot();
  });
});
