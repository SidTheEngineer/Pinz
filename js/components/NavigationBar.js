import React from 'react';
import {
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'rgb(79,232,122)',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    width: 80,
    marginTop: Platform.OS === 'ios' ? 1 : 0
  },
  routeTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: Platform.OS === 'ios' ? 6 : 0,
    fontSize: Platform.OS === 'ios' ? 18 : 22,
    fontWeight: 'bold'
  },
});

const NavigationBar = (
  <Navigator.NavigationBar
    style={styles.navigationBar}
    navigationStyles={Navigator.NavigationBar.StylesIOS}
    routeMapper={{
      LeftButton: (route, navigator) => {
        if (route.index === 0) {
          return null;
        }

        return (
          <TouchableOpacity
            style={[styles.iconContainer, { marginLeft: 5 }]}
            onPress={() => navigator.pop()}
          >
            <Icon name="angle-left" size={30} color={'white'} />
          </TouchableOpacity>
        );
      },
      RightButton: () => (
        // <TouchableOpacity style={[styles.iconContainer, { marginRight: 20 }]}>
        //   <Icon name="angle-right" size={25} color={'white'} />
        // </TouchableOpacity>
        null
      ),
      Title: route => (<Text style={styles.routeTitle}>{ route.title }</Text>)
    }}
  />
);

export default NavigationBar;
