import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import UpvoteDownvote from './UpvoteDownvote';

const styles = StyleSheet.create({
  postContainer: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'rgb(150,150,150)',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  }
});

const Post = () => (
  <TouchableOpacity style={styles.postContainer}>
    <UpvoteDownvote />
    <Text style={{ padding: 5 }}>TEST</Text>
  </TouchableOpacity>
);

export default Post;
