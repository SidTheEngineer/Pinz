import { Navigator } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NavigationBar from '../../js/components/NavigationBar';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('NavigationBar', () => {
  it('renders correctly', () => {
    const navigationBar = renderer.create(
      <Navigator
        navigationBar={NavigationBar}
        renderScene={jest.fn()}
        initialRoute={{ title: 'test' }}
      />
    ).toJSON();
    expect(navigationBar).toMatchSnapshot();
  });
});
