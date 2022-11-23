import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import pokemonList from '../data';
import Pokedex from '../pages/Pokedex';

test('Checa Pokedex', () => {
  renderWithRouter(<Pokedex
    pokemonList={ pokemonList }
    isPokemonFavoriteById={ {} }
  />);

  const typeButtons = screen.getAllByTestId('pokemon-type-button');
  const pokemonTypes = [
    ...new Set(pokemonList.reduce((types, { type }) => [...types, type], [])),
  ];
  typeButtons.forEach((button) => {
    expect(button).toBeInTheDocument();
    expect(pokemonTypes).toContain(button.textContent);
  });

  const allButton = screen.getByRole('button', {
    name: 'All',
  });
  userEvent.click(allButton);
  expect(allButton).toBeInTheDocument();
});
