import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import UpvoteDownvote from './UpvoteDownvote';
import { COLORS } from '../../../constant';

const styles = StyleSheet.create({
  postContainer: {
    height: 100,
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
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  title: {
    flex: 0.2,
    fontWeight: 'bold'
  },
  text: {
    flex: 0.8,
    color: COLORS.GRAY,
    padding: 2,
    fontSize: Platform.OS === 'ios' ? 12 : 14,
  }
});

const Post = props => (
  <TouchableOpacity style={styles.postContainer}>
    <UpvoteDownvote />
    <View style={styles.textContainer}>
      <Text style={[styles.text, styles.title]}>
        {props.details.title.replace(/<(?:.|\n)*?>/gm, '')}
      </Text>
      <Text style={styles.text} ellipsizeMode="tail">
        {/* Replace HTML tags that are in UCF's event descriptions. */}
        {/* Strip blank lines in description. */}
        {
          props.details.description.length > 200
            ? `${
                  props.details.description
                    .replace(/<(?:.|\n)*?>/gm, '')
                    .replace(/^\s*[\r\n]/gm, '')
                    .trim()
                    .substring(0, 200)
                }...`
            : props.details.description
        }
      </Text>
    </View>
  </TouchableOpacity>
);

Post.propTypes = {
  details: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  })
};

export default Post;
