import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import MapView from 'react-native-maps';

import ViewContainer from '../ViewContainer';
import MAP, { COLORS } from '../../constant';
import EventMarker from './EventMarker';
import EventModal from './EventModal';

const styles = StyleSheet.create({
  map: { flex: 5 },
  coordinates: { flex: 1 },
  statusBarContainer: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: COLORS.LIGHT_GREEN
  }
});

class Map extends Component {

  static propTypes = {
    map: React.PropTypes.shape({
      events: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.object),
        React.PropTypes.object
      ]),
      modalVisibility: React.PropTypes.bool.isRequired
    }),
    mapActions: React.PropTypes.objectOf(React.PropTypes.func)
  }

  static isInBounds(region) {
    return (
         (region.latitudeDelta < MAP.BOUNDS.MIN_ZOOM)
      && (region.longitude < MAP.BOUNDS.RIGHT_BOUNDS)
      && (region.latitude < MAP.BOUNDS.TOP_BOUNDS)
      && (region.longitude > MAP.BOUNDS.LEFT_BOUNDS)
      && (region.latitude > MAP.BOUNDS.BOTTOM_BOUNDS)
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      region: MAP.INITIAL_REGION,
      events: [],
      modalVisibility: false
    };

    this.onRegionChange = this.onRegionChange.bind(this);
    this.listEventMarkers = this.listEventMarkers.bind(this);
    this.setModalVisibility = this.setModalVisibility.bind(this);
  }

  componentDidMount() {
    this.props.mapActions.fetchInitialEvents();
  }

  onRegionChange(region) {
    this.setState({ region });

    if (!Map.isInBounds(region)) {
      this.setState({ region: MAP.INITIAL_REGION });
    }
  }

  setModalVisibility(visible) {
    this.setState({ modalVisibility: visible });
  }

  listEventMarkers() {
    return this.props.map.events.map(event => (
      <EventMarker
        key={event.id}
        details={event}
        loadModal={() => this.props.mapActions.showEventModal(true, event)}
      />
    ));
  }

  render() {
    console.log(this.props);
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
          moveOnMarkerPress={false}
          onRegionChange={this.onRegionChange}
        >
          {
            this.listEventMarkers()
          }
        </MapView>
        <EventModal {...this.props} />
      </ViewContainer>
    );
  }
}

export default Map;
