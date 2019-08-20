import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';


import Display from './Display.js';

describe('<Display />', () => {
  it('should match new snapshot', () => {
    const DOMtree = renderer
      .create(<Display />)
      .toJSON();
    expect(DOMtree).toMatchSnapshot();
  });
});