import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as mapActions from '../actions/map';
import TabBar from '../components/TabBar';


const Root = props => (
  <TabBar {...props} />
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  mapActions: bindActionCreators(mapActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
