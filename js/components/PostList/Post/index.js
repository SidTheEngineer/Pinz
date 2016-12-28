import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native';

import ViewContainer from '../../ViewContainer';
import UpvoteDownvote from './UpvoteDownvote';

const styles = StyleSheet.create({
  postContainer: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
    marginRight: Platform.OS === 'ios' ? 5 : 0
    // borderColor: 'rgb(150,150,150)',
    // borderStyle: 'solid',
    // borderTopWidth: 0.5,
    // borderBottomWidth: 0.5,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    padding: 2,
    fontSize: Platform.OS === 'ios' ? 12 : 14
  }
});

const Post = () => (
  <TouchableOpacity style={styles.postContainer}>
    <UpvoteDownvote />
    <ViewContainer>
      <Text style={[styles.text, styles.title]}>
        The standard Lorem Ipsum passage, used since the 1500s
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam
      </Text>
    </ViewContainer>
  </TouchableOpacity>
);

export default Post;
