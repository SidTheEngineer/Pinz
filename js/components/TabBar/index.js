import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tab from './Tab';
import Map from '../Map';
import CategoryList from '../CategoryList';

const styles = StyleSheet.create({
  tabContainer: {
    height: 45,
    flexDirection: 'row',
  }
});

const CustomTabBar = props => (
  // Props here are coming from the ScrollableTabView component.
  <View style={styles.tabContainer}>
    {props.tabs.map((tab, index) => (
      <Tab
        {...props}
        index={index}
        tab={tab}
        key={tab}
      />
    ))}
  </View>
);

const TabBar = props => (
  <ScrollableTabView
    tabBarPosition="bottom"
    renderTabBar={() => <CustomTabBar />}
    locked
  >
    <Map tabLabel="map" {...props} />
    <CategoryList tabLabel="list" />
  </ScrollableTabView>
);

CustomTabBar.propTypes = {
  tabs: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.string),
    React.PropTypes.string
  ])
};

export default TabBar;
