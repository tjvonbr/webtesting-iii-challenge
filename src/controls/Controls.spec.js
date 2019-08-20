import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Controls from './Controls.js';

afterEach(cleanup);

describe('<Controls />', () => {
  it('should match new snapshot', () => {
    const tree = renderer
      .create(<Controls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('toggleLocked function', () => {
  it('locks the gate if unlocked and unlocks the gate if locked', () => {
    const toggleLocked = jest.fn();

    const { getByTestId } = render(<Controls closed={true} locked={true} />);

    const openButton = getByTestId('open-btn');
    const unlockButton = getByTestId('lock-btn');

    fireEvent.click(openButton);

    expect(toggleLocked).toHaveBeenCalled();

    console.log(openButton);
  });
});