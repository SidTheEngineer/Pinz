import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  categoryContainer: {
    height: 75,
    flexDirection: 'row',
    borderColor: 'rgb(150,150,150)',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  textContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

const Category = props => (
  <TouchableOpacity style={styles.categoryContainer} onPress={props.navigate}>
    <View style={styles.textContainer}>
      <Text>{ props.title }</Text>
      <Icon name="arrow-right" size={20} style={{ marginRight: 15 }} />
    </View>
  </TouchableOpacity>
);

Category.propTypes = {
  navigate: React.PropTypes.func,
  title: React.PropTypes.string.isRequired
};

export default Category;
