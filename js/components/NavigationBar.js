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
    backgroundColor: 'rgb(51, 204, 94)'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  routeTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});

const NavigationBar = (
  <Navigator.NavigationBar
    style={styles.navigationBar}
    navigationStyles={Navigator.NavigationBar.StylesIOS}
    routeMapper={{
      LeftButton: () => (
        <TouchableHighlight style={[styles.iconContainer, { marginLeft: 20 }]}>
          <Icon name="arrow-left" size={20} color={'white'} />
        </TouchableHighlight>
      ),
      RightButton: () => (
        <TouchableHighlight style={[styles.iconContainer, { marginRight: 20 }]}>
          <Icon name="arrow-right" size={20} color={'white'} />
        </TouchableHighlight>
      ),
      Title: route => (<Text style={styles.routeTitle}>{ route.title }</Text>)
    }}
  />
);

export default NavigationBar;
