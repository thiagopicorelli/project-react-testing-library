import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import pokemonList from '../data';
import Pokemon from '../components/Pokemon';

test('Checa Pokedex', () => {
  const pokemon = pokemonList[0];
  renderWithRouter(<Pokemon 
    isFavorite={ true }
    pokemon={ pokemon }
  />);
  const image = screen.getByAltText(`${pokemon.name} sprite`)
  expect(image).toBeInTheDocument();
  expect(image.getAttribute('src')).toBe(pokemon.image);

  const favImage = screen.getByAltText(`${pokemon.name} is marked as favorite`)
  expect(favImage).toBeInTheDocument();
  expect(favImage.getAttribute('src')).toBe('/star-icon.svg');

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType).toBeInTheDocument();
  expect(pokemonType.textContent).toEqual(pokemon.type);

  const link = screen.getByRole('link', {
    name: 'More details',
  });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', `/pokemon/${pokemon.id}`);
});
