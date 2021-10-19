import React, { useEffect } from 'react';

import { usePokemonContext } from '../../hooks/pokemonContext';

import { CardPokemons } from '../../components/CardPokemons';
import { Header } from '../../components/Header';

import {
  Container,
  PokemonsList
} from './styles';

export function PokemonList() {
    const { fetchPokemons, pokemons } = usePokemonContext();
    
    useEffect(() => {
        setTimeout(() => {
            fetchPokemons();
        }, 2000);
    }, []);
    

    return (
        
        <Container>
            <PokemonsList
                data={pokemons}
                //@ts-ignore
                renderItem={pokemon => <CardPokemons pokemon={pokemon.item} />}
                keyExtractor={(pokemon, item) => String(item)}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={( <Header /> )}
            />
        </Container>
    );
}