import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../../constant';

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    backgroundColor: 'rgb(245,245,245)',
    elevation: 8
  }
});

const Tab = props => (
  <TouchableOpacity
    style={styles.tab}
    onPress={() => props.goToPage(props.index)}
    activeOpacity={1}
  >
    <Icon
      name={props.tab}
      size={20}
      color={props.activeTab === props.index ? COLORS.LIGHT_GREEN : 'gray'}
    />
  </TouchableOpacity>
);

Tab.propTypes = {
  tab: React.PropTypes.string,
  goToPage: React.PropTypes.func,
  index: React.PropTypes.number,
  activeTab: React.PropTypes.number
};

export default Tab;
