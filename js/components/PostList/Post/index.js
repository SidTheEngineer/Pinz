import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native';

import ViewContainer from '../../ViewContainer';
import UpvoteDownvote from './UpvoteDownvote';
import { COLORS } from '../../../constant';

const styles = StyleSheet.create({
  postContainer: {
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 6,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    shadowOffset: {
      height: 0.5,
      width: -0.5
    },
    shadowOpacity: 0.3,
    shadowColor: 'black',
    shadowRadius: 1
    // borderColor: 'rgb(150,150,150)',
    // borderStyle: 'solid',
    // borderTopWidth: 0.5,
    // borderBottomWidth: 0.5,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.GRAY,
    padding: 2,
    fontSize: Platform.OS === 'ios' ? 12 : 14
  }
});

const Post = props => (
  <TouchableOpacity style={styles.postContainer}>
    <UpvoteDownvote />
    <ViewContainer>
      <Text style={[styles.text, styles.title]}>
        {props.details.title}
      </Text>
      <Text style={styles.text}>
        {/* Replace HTML tags that are in UCF's event descriptions */}
        {props.details.description.replace(/<(?:.|\n)*?>/gm, '')}
      </Text>
    </ViewContainer>
  </TouchableOpacity>
);

Post.propTypes = {
  details: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  })
};

export default Post;
