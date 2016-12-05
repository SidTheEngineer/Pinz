import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

// Default presentational component that can be used
// throughout the app.
export default class ViewContainer extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
