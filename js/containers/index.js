import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewContainer from '../components/ViewContainer';
import Map from '../components/Map';

const Root = () => (
  <ViewContainer>
    <Map />
  </ViewContainer>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Root);
