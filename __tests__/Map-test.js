import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../js/components/Map';
import MAP from '../js/constant';

jest.mock('react-native-maps', () => 'MapView');

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
      <Map map={MAP} />
    ).toJSON();
    expect(map).toMatchSnapshot();
  });

  it('checks for out of bounds', () => {
    // Min zoom check.
    expect({ latitudeDelta: 0.026 }).toBeOutOfBounds(MAP.INITIAL_REGION);

    // Right bounds check.
    expect({ longitude: -81 }).toBeOutOfBounds(MAP.INITIAL_REGION);

    // Top bounds check.
    expect({ latitude: 28.7 }).toBeOutOfBounds(MAP.INITIAL_REGION);

    // Left bounds check.
    expect({ longitude: -81 }).toBeOutOfBounds(MAP.INITIAL_REGION);

    // Bottom bounds check.
    expect({ latitude: 28 }).toBeOutOfBounds(MAP.INITIAL_REGION);
  });
});
