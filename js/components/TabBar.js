import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Map from '../containers/Map';

const TabBar = () => (
  <ScrollableTabView>
    <Map tabLabel="Map" />
  </ScrollableTabView>
);

export default TabBar;
