import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  BackAndroid
} from 'react-native';

import { COLORS } from '../../constant';
import Category from './Category';

const styles = StyleSheet.create({
  categoryListContainer: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 64
  }
});

class CategoryList extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired,
      pop: React.PropTypes.func.isRequired,
      getCurrentRoutes: React.PropTypes.func.isRequired
    })
  }

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
    const { navigator } = this.props;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
      }
      return false;
    });

    return (
      <ScrollView style={styles.categoryListContainer}>
        <Category {...this.props} title={'Events'} navigate={() => this.navigate('Events')} />
        <Category {...this.props} title={'Garages'} />
        <Category {...this.props} title={'Food'} />
        <Category {...this.props} title={'Test'} />
      </ScrollView>
    );
  }
}

export default CategoryList;
