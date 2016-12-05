import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

const STUDENT_UNION = {
    lat: 28.601660,
    lng: -81.200788
}

export default class Map extends Component {
    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: STUDENT_UNION.lat,
                    longitude: STUDENT_UNION.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.map}
            />
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
