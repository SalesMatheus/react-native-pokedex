import React, { ReactNode } from 'react';

import {
    Container,
    Header,
    About,
    Divider,
    Footer,
    Title,
} from './styles';

interface PokemonProps {
    // id: number;
    // name: string;
    // abilities: {
    //     ability: {
    //         name: string,
    //     },
    // }[];
    // species: {
    //     name: string
    // };
    // types: {
    //     slot: number;
    //     type: {
    //         name: string;
    //     }
    // }[];
    // stats: {
    //     base_stat: number;
    //     stat: {
    //         name: string;
    //     }
    // }[];
    weight: number;
    height: number;
}

export function ModalView({ weight, height }: PokemonProps) {
    return (
        <Container>
            <Header>
                <About>About</About>
                <Divider />
            </Header>
            <Footer>
                <Title>Altura {height} M</Title>
                <Title>Peso {weight} Kg</Title>

            </Footer>
        </Container>
    );
}