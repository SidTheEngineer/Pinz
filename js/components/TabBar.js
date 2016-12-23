import React from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Posts from '../components/Posts';
import Map from './Map';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: 'white'
  },

  underlineStyle: {
    backgroundColor: 'white'
  }
});

const TabBar = props => (
  <ScrollableTabView
    renderTabBar={() => <DefaultTabBar />}
    tabBarPosition="bottom"
    tabBarBackgroundColor={'#05006d'}
    tabBarTextStyle={styles.textStyle}
    tabBarUnderlineStyle={styles.underlineStyle}
  >
    <Map {...props} tabLabel="Map" />
    <Posts tabLabel="Posts" />
  </ScrollableTabView>
);

export default TabBar;
