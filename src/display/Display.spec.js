import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display.js';

describe('<Display />', () => {
  it('should match new snapshot', () => {
    const DOMtree = renderer
      .create(<Display />)
      .toJSON();
    expect(DOMtree).toMatchSnapshot();
  });
});