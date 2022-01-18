/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import Main from '../../src/components/Main';

describe('Main component suite', () => {
  test('it renders correctly', () => {
    render(<Main />);

    expect(screen.getByText("Cuay's Little Garden")).toBeInTheDocument();
  });
});
