import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';
import '@testing-library/jest-dom';

describe('Header', () => {
  test('Renders logo', () => {
    const { getByText } = render(<Header />);
    const logoElement = getByText('Logo');
    expect(logoElement).toBeInTheDocument();
  });
});
