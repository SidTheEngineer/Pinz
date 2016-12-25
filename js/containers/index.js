import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TabBar from '../components/TabBar';
// import PostList from '../components/PostList';

const Root = props => (
  <TabBar {...props} />
);

const mapStateToProps = state => state;

// TODO: Bind future action creators here.
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
