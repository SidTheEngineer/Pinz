import React, { Component } from 'react';
import { Navigator } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from './CustomTabBar';
import Map from '../Map';
import CategoryList from '../CategoryList';
import PostList from '../PostList';

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

export default TabBar;
