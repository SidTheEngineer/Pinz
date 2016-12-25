import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from '../components/TabBar';
import Map from '../components/Map';
// import PostList from '../components/PostList';
import CategoryList from '../components/CategoryList';

const Root = props => (
  <ScrollableTabView
    tabBarPosition="bottom"
    renderTabBar={() => <TabBar />}
    locked
  >
    <Map tabLabel="map" {...props} />
    <CategoryList tabLabel="list" />
  </ScrollableTabView>
);

const mapStateToProps = state => state;

// TODO: Bind future action creators here.
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
