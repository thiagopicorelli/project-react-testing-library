import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

test('Checa NotFound', () => {
  renderWithRouter(<NotFound />);
  const notFound = screen.getByRole('heading', {
    name: 'Page requested not found',
  });
  expect(notFound).toBeInTheDocument();

  const image = screen.getByAltText('Pikachu crying because the page requested was not found');
  expect(image).toBeInTheDocument();
  expect(image.getAttribute('src')).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
