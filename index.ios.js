import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './js/store';
import Root from './js/containers';

const root = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

AppRegistry.registerComponent('Pinz', () => root);
