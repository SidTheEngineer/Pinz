import React from 'react';
import MapView from 'react-native-maps';
import { Text, StyleSheet } from 'react-native';

import LANDMARKS from '../../landmarks';
import { COLORS } from '../../constant';
import active from './assets/active.png';
import place from './assets/place.png';

const styles = StyleSheet.create({
  calloutContainer: {
    height: 30,
    width: 250,
    backgroundColor: COLORS.RED,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 50
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 12,
  }
});

// TODO: Use the new LANDMARKS object instead of array.
//       Supply coordinates of event based on name of location.
//       (Like a key, value Map, mentioned in landmarks.js).
//       This is faster/easier than looping through a giant array.
//       This may eventually change to a giant JSON object.

const getEventCoords = (event) => {
  const landmarks = LANDMARKS.filter(
    landmark => landmark.NAME === event.location
  );

  /*
    TODO: If the event matches none of the predefined landmark regions, then
    a custom latlng region was defined for the event, this will need to be taken
    care of in the future! (Otherwise, these events default to the SU)
  */
  return landmarks.length > 0 ? landmarks[0].REGION : {
    latitude: 28.601660,
    longitude: -81.200788,
  };
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
    key={props.details.id}
    coordinate={getEventCoords(props.details)}
    image={getEventImage(props.details)}
  >
    <MapView.Callout
      tooltip
      style={styles.calloutContainer}
      onPress={props.loadModal}
    >
      <Text style={[styles.text, styles.title]} ellipsizeMode="tail">
        {
          props.details.title.length > 30
          ? `${props.details.title.substring(0, 30)}...`
          : props.details.title
        }
      </Text>
    </MapView.Callout>
  </MapView.Marker>
);

EventMarker.propTypes = {
  details: React.PropTypes.shape({
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  }),
  loadModal: React.PropTypes.func
};

export default EventMarker;
