import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import Map from '../components/Map'

export default class Root extends Component {
    render() {
        return(
            <ViewContainer>
                <Map />
            </ViewContainer>
        );
    }
}
