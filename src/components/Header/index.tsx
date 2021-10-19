import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  ContentImage,
  Content,
  Title,
} from './styles';

export function Header() {
  return (
    <Container>
        <ContentImage>
            <Image
              source={require('../../assets/pokeball.png')}
              style={{ width: '100%', height: '100%' }}
            />
        </ContentImage>
        <Content>
            <Title>Pokédex</Title>
        </Content>
    </Container>
  );
}