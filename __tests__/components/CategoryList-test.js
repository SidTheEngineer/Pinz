import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryList from '../../js/components/CategoryList';

describe('CategoryList', () => {
  it('renders correctly', () => {
    const categoryList = renderer.create(
      <CategoryList />
    ).toJSON();
    expect(categoryList).toMatchSnapshot();
  });
});
