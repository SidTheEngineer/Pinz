import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
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
  categoryListContainer: {
    flex: 1,
    backgroundColor: 'rgb(235,235,235)'
  },
  textContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

const Category = () => (
  <TouchableOpacity style={styles.categoryContainer}>
    <View style={styles.textContainer}>
      <Text>TEST</Text>
      <Icon name="arrow-right" size={20} style={{ marginRight: 15 }} />
    </View>
  </TouchableOpacity>
);

const CategoryList = () => (
  <ScrollView style={styles.categoryListContainer}>
    <Category />
    <Category />
    <Category />
    <Category />
    <Category />
  </ScrollView>
);

export default CategoryList;
