import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    backgroundColor: 'rgb(240, 240, 240)',
    elevation: 8
  }
});

const Tab = props => (
  <TouchableOpacity
    style={
      props.activeTab === props.index
      ? [styles.tab, { backgroundColor: 'rgb(220,220,220)' }]
      : styles.tab
    }
    onPress={() => props.goToPage(props.index)}
  >
    <Icon
      name={props.tab}
      size={20}
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
