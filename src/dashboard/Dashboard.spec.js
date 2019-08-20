import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<Dashboard />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});