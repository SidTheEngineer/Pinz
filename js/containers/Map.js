import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import MapView from 'react-native-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewContainer from '../components/ViewContainer';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class Map extends Component {

  constructor(props) {
    super(props);

    this.handleZoomRestriction = this.handleZoomRestriction.bind(this);
  }

  handleZoomRestriction() {
    console.log(this);
  }

  render() {
    return (
      <ViewContainer>
        <StatusBar
          hidden
        />
        <MapView
          region={this.props.map.initialRegion}
          style={styles.map}
          provider="google"
          scrollEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          showsCompass={false}
          loadingEnabled
<<<<<<< HEAD
          onRegionChange={this.handleZoomRestriction}
=======
          onRegionChange={this.handleZoomRestriction()}
>>>>>>> 9c8baa72135442c33d49c46317acadfb0c73abca
        />
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
