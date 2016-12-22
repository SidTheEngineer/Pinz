import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Posts from '../components/Posts';
import Map from './Map';

const TabBar = props => (
  <ScrollableTabView
    tabBarPosition="bottom"
  >
    <Map {...props} tabLabel="Map" />
    <Posts tabLabel="Posts" />
  </ScrollableTabView>
);

export default TabBar;
