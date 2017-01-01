import React from 'react';
import MapView from 'react-native-maps';

import MAP from '../../constant';

const getEventCoords = (event) => {
  const landmarks = MAP.LANDMARKS.filter(
    landmark => landmark.NAME === event.location
  );
  console.log(event.title);
  return landmarks[0].REGION;
};

const Event = props => (
  <MapView.Marker
    key={props.event.event_id}
    coordinate={getEventCoords(props.event)}
  />
);

Event.propTypes = {
  event: React.PropTypes.shape({
    event_id: React.PropTypes.string
  })
};

export default Event;
