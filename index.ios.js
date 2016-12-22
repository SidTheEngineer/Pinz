import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './js/store';
import Root from './js/containers';

const MapRoot = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

AppRegistry.registerComponent('Pinz', () => MapRoot);
