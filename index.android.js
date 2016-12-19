import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './js/store';
import Map from './js/containers/Map';

const MapRoot = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

AppRegistry.registerComponent('Pinz', () => MapRoot);
