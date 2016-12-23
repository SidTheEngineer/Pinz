import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Text } from 'react-native';
import IconBar from '../components/IconBar';
import Map from '../components/Map';

const Root = props => (
  <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <IconBar />}>
    <Map tabLabel="map" />
    <Text tabLabel="list">list</Text>
  </ScrollableTabView>
);

const mapStateToProps = state => state;

// TODO: Bind future action creators here.
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
