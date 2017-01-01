import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../../constant';

const styles = StyleSheet.create({
  categoryContainer: {
    height: 75,
    flexDirection: 'row',
    // borderColor: 'rgb(150,150,150)',
    // borderStyle: 'solid',
    // borderTopWidth: 0.5,
    // borderBottomWidth: 0.5,
  },
  textContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 15,
    color: COLORS.GRAY
  }
});

const Category = props => (
  <TouchableOpacity style={styles.categoryContainer} onPress={props.navigate}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{ props.title }</Text>
      <Icon
        name="arrow-right"
        size={20}
        color={COLORS.GRAY}
        style={{ marginRight: 15 }}
      />
    </View>
  </TouchableOpacity>
);

Category.propTypes = {
  navigate: React.PropTypes.func,
  title: React.PropTypes.string.isRequired
};

export default Category;
