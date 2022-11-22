import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

test('Checa about', () => {
  renderWithRouter(<About />);
  const pokedexHead = screen.getByRole('heading', {
    name: 'About Pokédex',
  });
  expect(pokedexHead).toBeInTheDocument();

  const image = screen.getByAltText('Pokédex');
  expect(image).toBeInTheDocument();
  expect(image.getAttribute('src')).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
