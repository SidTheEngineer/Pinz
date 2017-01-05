import React, { Component } from 'react';
import { Navigator } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from './CustomTabBar';
import NavigationBar from '../NavigationBar';
import Map from '../Map';
import CategoryList from '../CategoryList';
import EventList from '../EventList';

class TabBar extends Component {

  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.title) {

      case 'Events':
        return <EventList {...this.props} navigator={navigator} />;

      default:
        return <CategoryList {...this.props} navigator={navigator} />;
    }
  }

  render() {
    const routes = [
      { title: 'Categories', index: 0 },
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
          navigationBar={NavigationBar}
          initialRoute={routes[0]}
          renderScene={this.renderScene}
          configureScene={() => Navigator.SceneConfigs.PushFromRight}
          tabLabel="list"
        />
      </ScrollableTabView>
    );
  }
}

export default TabBar;
