import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  categoryContainer: {
    height: 60,
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
    justifyContent: 'flex-start',
    backgroundColor: 'mistyrose'
  }
});

const Category = () => (
  <TouchableOpacity style={styles.categoryContainer}>
    <View style={styles.textContainer}>
      <Text>TEST</Text>
    </View>
  </TouchableOpacity>
);

const CategoryList = () => (
  <ScrollView style={{ flex: 1 }}>
    <Category />
    <Category />
    <Category />
    <Category />
    <Category />
  </ScrollView>
);

export default CategoryList;
