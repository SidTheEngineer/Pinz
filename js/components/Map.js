import React from 'react';
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

const STUDENT_UNION = {
  lat: 28.601660,
  lng: -81.200788
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

const Map = () => (
  <MapView
    initialRegion={{
      latitude: STUDENT_UNION.lat,
      longitude: STUDENT_UNION.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    style={styles.map}
    provider="google"
  />
);

export default Map
