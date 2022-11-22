import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemon';

test('Checa FavoritePokemon', () => {
  renderWithRouter(<FavoritePokemon />);
  const noPokemonFound = screen.getByText('No favorite Pokémon found');
  expect(noPokemonFound).toBeInTheDocument();
});
