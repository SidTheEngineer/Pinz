import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';
import Post from './Post';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(235,235,235)'
  }
});

class PostList extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,
        <Post />,

      ])
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => rowData}
        style={styles.listContainer}

        // Ratio of initial render to how many rendered
        // per frame.
        initialListSize={30}
        pageSize={4}
      />
    );
  }
}

export default PostList;
