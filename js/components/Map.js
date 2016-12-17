import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const STUDENT_UNION = {
  lat: 28.601660,
  lng: -81.200788
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: STUDENT_UNION.lat,
        longitude: STUDENT_UNION.lng,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
      }
    };
  }

  render() {
    return (
      <MapView
        region={this.state.region}
        style={styles.map}
        provider="google"
        scrollEnabled={false}
        zoomEnabled={false}
      />
    );
  }
}

export default Map;
