import { render } from '@testing-library/react';
import Main from './main';
import '@testing-library/jest-dom';

const products = [
  {
    id: 1,
    category: 'Electronics',
    price: 99.99,
    image: 'electronics.jpg',
    description: 'electric',
  },
  {
    id: 2,
    category: 'Clothing',
    price: 49.99,
    image: 'clothing.jpg',
    description: 'clothing',
  },
];

test('renders main component with product information', () => {
  const { getByText, getAllByAltText } = render(<Main products={products} />);

  const electronicsCategory = getByText('Electronics');
  expect(electronicsCategory).toBeInTheDocument();

  const electronicsPrice = getByText('99.99$');
  expect(electronicsPrice).toBeInTheDocument();

  const clothingCategory = getByText('Clothing');
  expect(clothingCategory).toBeInTheDocument();

  const clothingPrice = getByText('49.99$');
  expect(clothingPrice).toBeInTheDocument();
});
