import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import MapView from 'react-native-maps';
import ViewContainer from '../ViewContainer';
import MAP, { COLORS } from '../../constant';

const styles = StyleSheet.create({
  map: { flex: 5 },
  coordinates: { flex: 1 },
  statusBarContainer: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: COLORS.LIGHT_GREEN
  }
});

class Map extends Component {

  static isInBounds(region) {
    if (region.latitudeDelta >= MAP.BOUNDS.MIN_ZOOM) {
      return false;
    } else if (region.longitude >= MAP.BOUNDS.RIGHT_BOUNDS) {
      return false;
    } else if (region.latitude >= MAP.BOUNDS.TOP_BOUNDS) {
      return false;
    } else if (region.longitude <= MAP.BOUNDS.LEFT_BOUNDS) {
      return false;
    } else if (region.latitude <= MAP.BOUNDS.BOTTOM_BOUNDS) {
      return false;
    }
    return true;
  }

  constructor(props) {
    super(props);

    this.state = {
      region: MAP.INITIAL_REGION
    };

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });

    if (!Map.isInBounds(region)) {
      this.setState({
        region: MAP.INITIAL_REGION
      });
    }
  }

  render() {
    return (
      <ViewContainer>
        <View style={styles.statusBarContainer}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.LIGHT_GREEN}
          />
        </View>
        <MapView
          region={this.state.region}
          style={styles.map}
          provider="google"
          rotateEnabled={false}
          pitchEnabled={false}
          showsCompass={false}
          loadingEnabled
          onRegionChange={this.onRegionChange}
        />
        {/* <Text style={styles.coordinates}>
          Latitude: {this.state.region.latitude}{'\n'}
          Longitude: {this.state.region.longitude}{'\n'}
          Latitude Delta: {this.state.region.latitudeDelta}{'\n'}
          Longitude Delta: {this.state.region.longitudeDelta}{'\n'}
        </Text> */}
      </ViewContainer>
    );
  }
}

Map.propTypes = {
  map: React.PropTypes.objectOf(React.PropTypes.object),
  initialRegion: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
    latitudeDelta: React.PropTypes.number,
    longitudeDelta: React.PropTypes.number
  })
};

export default Map;
