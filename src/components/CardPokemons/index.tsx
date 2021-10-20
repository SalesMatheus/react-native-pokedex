import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity, Alert } from 'react-native';

import {
  Container,
  ImageBackground,
  PokemonInfo,
  Number,
  Name,
  PokemonImage
} from './styles';

interface PokemonItemProps {
    image: string;
    name: string;
    id: number;
}

interface Props {
    pokemon: PokemonItemProps;
}

export function CardPokemons({ pokemon: pokemonData }: Props) {

    function handlePokemonDetail(PokemonId: number){
        if(PokemonId){

        }else{
            Alert.alert('Pokémon não encontrado!');
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => handlePokemonDetail(pokemonData.id)}>
            <Container>
                <ImageBackground>
                    <Image
                    source={require('../../assets/pokeball.png')}
                    style={{ width: '100%', height: '100%' }}
                    />
                </ImageBackground>
                <PokemonInfo>
                    <Number># {pokemonData.id.toString().padStart(4, '0')}</Number>
                    <Name>{pokemonData.name}</Name>
                </PokemonInfo>

                <PokemonImage>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: pokemonData.image as string }}
                    />
                </PokemonImage>
            </Container>
        </TouchableOpacity>
    );
}