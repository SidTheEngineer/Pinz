import React from 'react';
import MapView from 'react-native-maps';
import { Text, StyleSheet } from 'react-native';

import MAP, { COLORS } from '../../constant';
import active from './assets/active.png';
import place from './assets/place.png';

const styles = StyleSheet.create({
  calloutContainer: {
    height: 25,
    width: 250,
    backgroundColor: COLORS.RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 12,
  }
});

// Supply coordinates of event based on name of location.
const getEventCoords = (event) => {
  const landmarks = MAP.LANDMARKS.filter(
    landmark => landmark.NAME === event.location
  );
  return landmarks[0].REGION;
};

// Supply a custom marker image based on category of event.
const getEventImage = (event) => {
  switch (event.category) {
    case 'Sports':
      return active;
    default:
      return place;
  }
};

const EventMarker = props => (
  <MapView.Marker
    key={props.details.event_id}
    coordinate={getEventCoords(props.details)}
    image={getEventImage(props.details)}
  >
    <MapView.Callout tooltip style={styles.calloutContainer}>
      <Text style={[styles.text, styles.title]}>
        {props.details.title.substring(0, 40)}
      </Text>
    </MapView.Callout>
  </MapView.Marker>
);

EventMarker.propTypes = {
  details: React.PropTypes.shape({
    event_id: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  })
};

export default EventMarker;
