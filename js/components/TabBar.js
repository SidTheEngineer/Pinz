import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tab from './Tab';

const styles = StyleSheet.create({
  tabContainer: {
    height: 45,
    flexDirection: 'row',
  }
});

const TabBar = props => (
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

TabBar.propTypes = {
  tabs: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.string),
    React.PropTypes.string
  ])
};

export default TabBar;
