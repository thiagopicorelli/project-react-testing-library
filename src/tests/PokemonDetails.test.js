import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import pokemonList from '../data';
import App from '../App';

test('Checa PokemonDetails', () => {
  const pokemon = pokemonList[0];
  renderWithRouter(<App />, `/pokemon/${pokemon.id}`);

  const expectHeading = (name) => {
    const heading = screen.getByRole('heading', {
      name,
    });
    expect(heading).toBeInTheDocument();
  };

  const expectText = (text) => {
    const textScreen = screen.getByText(text);
    expect(textScreen).toBeInTheDocument();
  };

  expectHeading(`${pokemon.name} Details`);
  expectHeading(`Game Locations of ${pokemon.name}`);
  expectHeading('Summary');

  expectText(pokemon.summary);
  expectText('Pokémon favoritado?');

  const maps = pokemon.foundAt.map((found) => found.map);
  const images = screen.getAllByAltText(`${pokemon.name} location`);
  images.forEach((image) => {
    expect(image).toBeInTheDocument();
    expect(maps).toContain(image.getAttribute('src'));
  });
});
