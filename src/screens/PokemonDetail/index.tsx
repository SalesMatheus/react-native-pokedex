import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import api from '../../service/api';

import { ModalView } from '../../components/ModalView';

import {
    Container,
    Header,
    HeaderInfo,
    PokemonName,
    PokemonNumber,
    PokemonTypes,
    TypeInfo,
    TypeText,
    PokemonImage,
    ImageBackground,
    ImageGroup
} from './styles';


interface PokemonProps {
    id: number;
    name: string;
    abilities: {
        ability: {
            name: string,
        },
    }[];
    species: {
        name: string
    };
    types: {
        slot: number;
        type: {
            name: string;
        }
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        }
    }[];
    weight: number;
    height: number;
}

export function PokemonDetail() {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonProps>();
    const [isLoading, setIsLoading] = useState(true);
    const PokemonId = useRoute<any>().params.PokemonId;

    const navigation =  useNavigation();

    async function fetchPokemon(){
        const { data }:any = await api.get(`/pokemon/${PokemonId}`);
        
        setPokemonDetails(data);
        setIsLoading(false);
        
    }

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect(() =>{
        fetchPokemon();
    },[]);

    return (
        <Container>
            {
                !isLoading && 
                    <>
                        <Header>
                            <BorderlessButton onPress={handleGoBack}>
                                <Feather 
                                    name="arrow-left"
                                    size={ 22 }
                                    color={'#DDDDEE'}
                                />
                            </BorderlessButton>
                        </Header>
                        <HeaderInfo>
                            <PokemonName>
                                {pokemonDetails?.name}
                            </PokemonName>
                            <PokemonNumber>
                                # {pokemonDetails?.id.toString().padStart(4, '0')}
                            </PokemonNumber>
                        </HeaderInfo>
                        <HeaderInfo>
                            <PokemonTypes>
                                {pokemonDetails?.types.map(({ type }, id: number) => (
                                    <TypeInfo value={type.name} key={`${id}-${type.name}`}>
                                        <TypeText>{type.name}</TypeText>
                                    </TypeInfo>
                                ))}
                            </PokemonTypes>
                            
                        </HeaderInfo>

                        <ImageGroup>
                            <PokemonImage 
                                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png` }} 
                            />
                            <ImageBackground>
                                <Image
                                    source={require('../../assets/pokeball.png')}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </ImageBackground>
                        </ImageGroup>
                        <ModalView 
                            stats={pokemonDetails!.stats}
                            weight={pokemonDetails!.weight} 
                            height={pokemonDetails!.height}
                        />
                    </>
            }
            
        </Container>
    );
}