import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

const Map = props => (
  <MapView
    region={props.map.initialRegion}
    style={styles.map}
    provider="google"
    scrollEnabled={false}
    zoomEnabled={false}
  />
);

Map.propTypes = {
  map: React.PropTypes.objectOf(React.PropTypes.object),
  initialRegion: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
    latitudeDelta: React.PropTypes.number,
    longitudeDelta: React.PropTypes.number
  })
};

const mapStateToProps = state => state;

// TODO: Bind future action creators here.
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
