import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../js/components/Map';

jest.mock('react-native-maps', () => 'MapView');

const mapProps = {
  initialRegion: {
    latitude: 28.601660,
    longitude: -81.200788,
    latitudeDelta: 0.0206,
    longitudeDelta: 0.014
  }
};

expect.extend({
  // Takes in an area where the map would consider out of bounds.
  // Returns true if out of bounds.
  toBeOutOfBounds(failRegion, passRegion) {
    const pass = !Map.isInBounds(Object.assign(
      {},
      passRegion,
      failRegion
    ));

    const message =
      () => `expected ${failRegion} ${pass ? 'not' : ''} to be true`;

    return { message, pass };
  }
});

describe('Map', () => {
  it('renders correctly', () => {
    const map = renderer.create(
      <Map map={mapProps} />
    ).toJSON();
    expect(map).toMatchSnapshot();
  });

  it('checks for out of bounds', () => {
    // Min zoom check.
    expect({ latitudeDelta: 0.026 }).toBeOutOfBounds(mapProps.initialRegion);

    // Right bounds check.
    expect({ longitude: -81 }).toBeOutOfBounds(mapProps.initialRegion);

    // Top bounds check.
    expect({ latitude: 28.7 }).toBeOutOfBounds(mapProps.initialRegion);

    // Left bounds check.
    expect({ longitude: -81 }).toBeOutOfBounds(mapProps.initialRegion);

    // Bottom bounds check.
    expect({ latitude: 28 }).toBeOutOfBounds(mapProps.initialRegion);
  });
});
