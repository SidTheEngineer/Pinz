import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  }
});

// Default presentational component that can be used
// throughout the app.
const ViewContainer = ({ children }) => (
  <View style={styles.viewContainer}>
    { children }
  </View>
);

ViewContainer.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};


export default ViewContainer;
