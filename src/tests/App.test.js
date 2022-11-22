import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('Checa links de navegação', () => {
  renderWithRouter(<App />);
  const linkCheck = (name) => {
    const link = screen.getByRole('link', {
      name,
    });
    expect(link).toBeInTheDocument();
  };
  linkCheck('Home');
  linkCheck('About');
  linkCheck('Favorite Pokémon');
});
