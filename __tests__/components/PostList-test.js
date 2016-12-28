import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PostList from '../../js/components/PostList';

describe('PostList', () => {
  it('renders correctly', () => {
    const postList = renderer.create(
      <PostList />
    ).toJSON();
    expect(postList).toMatchSnapshot();
  });
});
