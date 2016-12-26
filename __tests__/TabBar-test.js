import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TabBar from '../js/components/TabBar';
import MAP from '../js/constant';

// The TabBar is responsible for returning a MapView, so
// react-native-maps is needed, as well as initial props.

jest.mock('react-native-scrollable-tab-view', () => 'ScrollableTabView');
jest.mock('react-native-maps', () => 'MapView');

describe('TabBar', () => {
  it('renders correctly', () => {
    const tabBar = renderer.create(
      <TabBar map={MAP} />
    ).toJSON();
    expect(tabBar).toMatchSnapshot();
  });
});
