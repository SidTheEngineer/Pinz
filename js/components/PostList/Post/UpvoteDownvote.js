import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  upvoteDownvoteContainer: {
    flexDirection: 'column',
    width: 55,
  },
  upDownButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(150,150,150)',
    borderStyle: 'solid',
    borderRightWidth: 0.5,
  }
});

const UpvoteDownvote = () => (
  <View style={styles.upvoteDownvoteContainer}>
    <TouchableOpacity style={styles.upDownButton}>
      <Icon name="arrow-up" size={20} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.upDownButton}>
      <Icon name="arrow-down" size={20} />
    </TouchableOpacity>
  </View>
);

export default UpvoteDownvote;
