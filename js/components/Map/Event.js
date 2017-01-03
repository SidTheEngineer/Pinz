import React from 'react';
import MapView from 'react-native-maps';

import MAP from '../../constant';
import active from './assets/active.png';
import place from './assets/place.png';

// Supply coordinates of event based on name of location.
const getEventCoords = (event) => {
  const landmarks = MAP.LANDMARKS.filter(
    landmark => landmark.NAME === event.location
  );
  console.log(event.title);
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

const Event = props => (
  <MapView.Marker
    key={props.details.event_id}
    coordinate={getEventCoords(props.details)}
    image={getEventImage(props.details)}
    // draggable
  />
);

Event.propTypes = {
  details: React.PropTypes.shape({
    event_id: React.PropTypes.string
  })
};

export default Event;
