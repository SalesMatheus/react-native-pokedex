import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useRoute } from '@react-navigation/native';

import api from '../../service/api';

import {
    Container
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
    const [ isLoading, setIsLoading] = useState(true);
    const PokemonId = useRoute<any>().params.PokemonId;

    async function fetchPokemon(){
        const { data }:any = await api.get(`/pokemon/${PokemonId}`);
        
        setPokemonDetails(data);
        setIsLoading(false);
        
    }

    useEffect(() =>{
        fetchPokemon();
    },[]);

    
    return (
        <Container>
            {
                !isLoading && <Text>{pokemonDetails?.name}</Text>
            }
            
        </Container>
    );
}