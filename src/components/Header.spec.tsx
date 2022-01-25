import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Header from './Header';

describe('App component suite', () => {
  test('it renders correctly', async () => {
    const { getByText } = render(<Header />);

    await waitFor(() =>
      expect(getByText(/Cuay's Little Garden/)).toBeInTheDocument(),
    );
  });
});
