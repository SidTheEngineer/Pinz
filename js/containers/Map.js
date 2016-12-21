import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewContainer from '../components/ViewContainer';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  textBlock: {
    height: 300
  }
});

const RIGHT_BOUNDS = -81.197;
const MIN_ZOOM = 0.025;

class Map extends Component {

  static isInBounds(region) {
    if (region.latitudeDelta >= MIN_ZOOM) {
      return false;
    } else if (region.longitude >= RIGHT_BOUNDS) {
      return false;
    }

    return true;
  }

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 28.601660,
        longitude: -81.200788,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
      }
    };

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });

    if (!Map.isInBounds(region)) {
      this.setState({
        region: this.props.map.initialRegion
      });
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBar
          hidden
        />
        <MapView
          region={this.state.region}
          style={styles.map}
          provider="google"
          // scrollEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          showsCompass={false}
          loadingEnabled
          onRegionChange={this.onRegionChange}
        />
        <View style={styles.textBlock}>
          <Text>
            Latitude: {this.state.region.latitude}{'\n'}
            Longitude: {this.state.region.longitude}{'\n'}
            Latitude Delta: {this.state.region.latitudeDelta}{'\n'}
            Longitude Delta: {this.state.region.longitudeDelta}{'\n'}
          </Text>
        </View>
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

const mapStateToProps = state => state;

// TODO: Bind future action creators here.
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
