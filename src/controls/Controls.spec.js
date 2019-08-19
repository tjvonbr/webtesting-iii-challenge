import React from 'react';
import renderer from 'react-test-renderer';

import Controls from './Controls.js';

describe('<Controls />', () => {
  it('should match new snapshot', () => {
    const tree = renderer
      .create(<Controls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});