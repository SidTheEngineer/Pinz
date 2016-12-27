import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Tab from './Tab';
import Map from '../Map';
import CategoryList from '../CategoryList';
import PostList from '../PostList';

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

class TabBar extends Component {

  static renderScene(route, navigator) {
    switch (route.title) {

      case 'Events':
        return <PostList navigator={navigator} />;

      default:
        return <CategoryList navigator={navigator} />;
    }
  }

  render() {
    const routes = [
      { title: 'Category List', index: 0 },
      { title: 'Events', index: 1 }
    ];


    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        renderTabBar={() => <CustomTabBar />}
        locked
      >
        <Map tabLabel="map" {...this.props} />
        <Navigator
          initialRoute={routes[0]}
          renderScene={TabBar.renderScene}
          configureScene={() => Navigator.SceneConfigs.PushFromRight}
          tabLabel="list"
        />
      </ScrollableTabView>
    );
  }
}

CustomTabBar.propTypes = {
  tabs: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.string),
    React.PropTypes.string
  ])
};

export default TabBar;
