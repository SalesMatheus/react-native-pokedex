import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  Title,
  Divider,
  Footer,
  Measures,
  ContentTitle,
  TextTitle,
  ContentDescription,
  TextDescription,
  PokemonDescription,
  PokemonDescriptionTitle,
  PokemonDescriptionContent,
  DescriptionStats,
  PokemonNumberContent,
  PokemonStats,
  DescriptionNumber,
  PokemonStatBar,
} from './styles';

interface PokemonProps {
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
}

export function ModalView({ stats, weight, height }: PokemonProps) {
  const formatStatName = (statName: string) => {
    if (statName.includes('special-')) {
      let newStatName = statName.replace('special-', 'sp. ');

      if (statName.includes('attack'))
        newStatName = newStatName.replace('attack', 'atk');

      if (statName.includes('defense'))
        newStatName = newStatName.replace('defense', 'def');

      return newStatName;
    }
    return statName;
  };
  return (
    <Container>
      <Header>
        <Title>About</Title>
        <Divider />
      </Header>
      <Footer>
        <Measures>
          <ContentTitle>
            <TextTitle>Height</TextTitle>
            <TextDescription>{(height / 10).toFixed(1)} m</TextDescription>
          </ContentTitle>
          <ContentDescription>
            <TextTitle>Weight</TextTitle>
            <TextDescription>{(weight / 10).toFixed(1)} kg</TextDescription>
          </ContentDescription>
        </Measures>
        <PokemonDescription>
          <PokemonDescriptionTitle>
            <Title>Stats</Title>
          </PokemonDescriptionTitle>
          {stats.map(stat => (
            <PokemonStats key={stat.stat.name}>
              <PokemonDescriptionContent>
                <DescriptionStats>
                  {formatStatName(stat.stat.name)}
                </DescriptionStats>
              </PokemonDescriptionContent>
              <PokemonNumberContent>
                <DescriptionNumber>{stat.base_stat}</DescriptionNumber>
              </PokemonNumberContent>
              <PokemonStatBar>
                <View
                  style={{
                    backgroundColor:
                      stat.base_stat < 55
                        ? 'rgba(255, 0, 0, 0.35)'
                        : 'rgba(0, 235, 0, 0.35)',
                    width:
                      stat.base_stat > 100
                        ? '100%'
                        : stat.base_stat.toString().concat('%'),
                    height: '100%',
                  }}
                />
              </PokemonStatBar>
            </PokemonStats>
          ))}
        </PokemonDescription>
      </Footer>
    </Container>
  );
}
