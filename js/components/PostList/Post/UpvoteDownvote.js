import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  upvoteDownvoteContainer: {
    flexDirection: 'column',
    width: Platform.OS === 'ios' ? 45 : 55,
  },
  upDownButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'rgb(150,150,150)',
    // borderStyle: 'solid',
    // borderRightWidth: 0.5,
  },
  upArrow: { color: 'rgb(51, 204, 94)' },
  downArrow: { color: 'rgb(219, 54, 65)' }
});

const UpvoteDownvote = () => (
  <View style={styles.upvoteDownvoteContainer}>
    <TouchableOpacity style={styles.upDownButton}>
      <Icon name="arrow-up" size={20} style={styles.upArrow} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.upDownButton}>
      <Icon name="arrow-down" size={20} style={styles.downArrow} />
    </TouchableOpacity>
  </View>
);

export default UpvoteDownvote;
