import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element
  ])
};


export default ViewContainer;
