import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  postContainer: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'rgb(150,150,150)',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
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

const Post = () => (
  <TouchableOpacity style={styles.postContainer}>
    <UpvoteDownvote />
    <Text>TEST</Text>
  </TouchableOpacity>
);

export default Post;
