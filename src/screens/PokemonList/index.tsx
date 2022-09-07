import React, { useCallback, useEffect } from 'react';

import { usePokemonContext } from '../../hooks/pokemonContext';
import { CardPokemons } from '../../components/CardPokemons';
import { Header } from '../../components/Header';

import { Container, PokemonsList } from './styles';

export function PokemonList() {
  const { fetchPokemons, pokemons } = usePokemonContext();

  const renderPokemon = useCallback(pokemon => {
    return <CardPokemons pokemon={pokemon} />;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchPokemons();
    }, 2000);
  }, [fetchPokemons]);

  return (
    <Container>
      <PokemonsList
        data={pokemons}
        renderItem={pokemon => renderPokemon(pokemon.item)}
        keyExtractor={(pokemon, item) => String(item)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header />}
      />
    </Container>
  );
}
