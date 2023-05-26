import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  test('Renders logo', () => {
    const { getByText } = render(<Footer />);
    const logoElement = getByText('Footer');
    expect(logoElement).toBeInTheDocument();
  });
});
