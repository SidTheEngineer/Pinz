import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  BackAndroid
} from 'react-native';

import Category from './Category';

const styles = StyleSheet.create({
  categoryListContainer: {
    flex: 1,
    backgroundColor: 'rgb(235,235,235)'
  }
});

class CategoryList extends Component {

  constructor() {
    super();

    this.navigate = this.navigate.bind(this);
  }

  navigate(title) {
    this.props.navigator.push({
      title
    });
  }

  render() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop();
        return true;
      }
      return false;
    });

    return (
      <ScrollView style={styles.categoryListContainer}>
        <Category {...this.props} navigate={() => this.navigate('Events')} />
        <Category {...this.props} />
        <Category {...this.props} />
        <Category {...this.props} />
        <Category {...this.props} />
      </ScrollView>
    );
  }
}

CategoryList.propTypes = {
  navigator: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
    pop: React.PropTypes.func.isRequired,
    getCurrentRoutes: React.PropTypes.func.isRequired
  }),
};

export default CategoryList;
