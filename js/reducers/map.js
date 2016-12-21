/*
  TODO: Consider adding initial event markers as a part of the
        initial state of the map.
*/

const initialState = {
  // Student Union.
  initialRegion: {
    latitude: 28.601660,
    longitude: -81.200788,
    latitudeDelta: 0.0206,
    longitudeDelta: 0.014
  }
};

const map = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default map;
