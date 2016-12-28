import React from 'react';
import {
  Text,
  Navigator,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'rgb(240, 240, 240)'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const NavigationBar = (
  <Navigator.NavigationBar
    style={styles.navigationBar}
    routeMapper={{
      LeftButton: () => (
        <TouchableHighlight style={styles.iconContainer}>
          <Icon name="arrow-left" size={20} />
        </TouchableHighlight>
      ),
      RightButton: () => (
        <TouchableHighlight style={styles.iconContainer}>
          <Icon name="arrow-right" size={20} />
        </TouchableHighlight>
      ),
      Title: route => (<Text>{ route.title }</Text>)
    }}
  />
);

export default NavigationBar;
