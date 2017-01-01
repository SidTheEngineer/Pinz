const MAP = {
  // UCF.
  INITIAL_REGION: {
    latitude: 28.601660,
    longitude: -81.200788,
    latitudeDelta: 0.0206,
    longitudeDelta: 0.014
  },
  // Around UCF.
  BOUNDS: {
    TOP_BOUNDS: 28.606,
    RIGHT_BOUNDS: -81.197,
    LEFT_BOUNDS: -81.205,
    BOTTOM_BOUNDS: 28.594,
    MIN_ZOOM: 0.025
  },
  TYPES: {
    RESET_MAP: 'RESET_MAP'
  },
  LANDMARKS: [
    {
      NAME: 'Student Union',
      REGION: {
        latitude: 28.601660,
        longitude: -81.200788,
      }
    },
    {
      NAME: 'CFE Arena',
      REGION: {
        latitude: 28.607393716392387,
        longitude: -81.19738698005676
      }
    }
  ]
};

export const COLORS = {
  LIGHT_GRAY: 'rgb(235,235,235)',
  LIGHT_GREEN: 'rgb(51, 204, 94)',
  RED: 'rgb(219, 54, 65)',
  GRAY: 'rgb(100,100,100)'
};

export default MAP;
