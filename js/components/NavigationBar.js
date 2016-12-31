import React from 'react';
import {
  Text,
  Navigator,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../constant';

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: COLORS.LIGHT_GREEN
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
    marginTop: 6,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const NavigationBar = (
  <Navigator.NavigationBar
    style={styles.navigationBar}
    navigationStyles={Navigator.NavigationBar.StylesIOS}
    routeMapper={{
      LeftButton: () => (
        <TouchableHighlight style={[styles.iconContainer, { marginLeft: 20 }]}>
          <Icon name="angle-left" size={25} color={'white'} />
        </TouchableHighlight>
      ),
      RightButton: () => (
        <TouchableHighlight style={[styles.iconContainer, { marginRight: 20 }]}>
          <Icon name="angle-right" size={25} color={'white'} />
        </TouchableHighlight>
      ),
      Title: route => (<Text style={styles.routeTitle}>{ route.title }</Text>)
    }}
  />
);

export default NavigationBar;
