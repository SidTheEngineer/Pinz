import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  tabContainer: {
    height: 45,
    flexDirection: 'row',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    backgroundColor: 'rgb(240, 240, 240)'
  }
});

class IconBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tabs: ['map', 'list']
    };
  }

  render() {
    return (
      // Props here are coming from the ScrollableTabView component.
      <View style={styles.tabContainer}>
        {this.props.tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => this.props.goToPage(index)}
          >
            <Icon
              name={tab} // Corresponds to the tabLabel.
              size={20}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

IconBar.propTypes = {
  goToPage: React.PropTypes.func,
  tabs: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.string),
    React.PropTypes.string
  ])
};

export default IconBar;
