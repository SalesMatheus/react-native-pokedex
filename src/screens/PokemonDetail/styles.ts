import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 10px;
`;

export const Header = styled.View`
  justify-content: center;
  /* margin-top: 20px; */
  padding: 10px;
  height: 10%;
  width: 100%;
`;

export const HeaderInfo = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const PokemonName = styled.Text`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 31px;
  text-transform: capitalize;
`;

export const PokemonNumber = styled.Text`
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 27px;
  text-transform: capitalize;
`;

export const PokemonTypes = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 8px 0;
`;
export const TypeInfo = styled.View<{ value: string }>`
  border-radius: 50px;
  margin: 8px 4px 0 0;
  padding: 6px 16px;

  ${props =>
    props.value === 'grass' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.grasss};
    `}

  ${props =>
    props.value === 'poison' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.poison};
    `}

    ${props =>
    props.value === 'bug' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.bug};
    `}

    ${props =>
    props.value === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.dark};
    `}

    ${props =>
    props.value === 'dragon' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.dragon};
    `}

    ${props =>
    props.value === 'eletric' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.eletric};
    `}

    ${props =>
    props.value === 'fairy' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.fairy};
    `}

    ${props =>
    props.value === 'fighting' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.fighting};
    `}

    ${props =>
    props.value === 'fire' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.fire};
    `}

    ${props =>
    props.value === 'flying' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.flying};
    `}

    ${props =>
    props.value === 'ghost' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.ghost};
    `}

    ${props =>
    props.value === 'ground' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.ground};
    `}

    ${props =>
    props.value === 'ice' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.ice};
    `}

    ${props =>
    props.value === 'normal' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.normal};
    `}

    ${props =>
    props.value === 'psychic' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.psychic};
    `}

    ${props =>
    props.value === 'rock' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.rock};
    `}

    ${props =>
    props.value === 'steel' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.steel};
    `}

    ${props =>
    props.value === 'water' &&
    css`
      background-color: ${({ theme }) => theme.typeColor.water};
    `}
`;

export const TypeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ImageGroup = styled.View`
  flex-direction: row;
`;

export const PokemonImage = styled.Image`
  height: 290px;
  width: 300px;
`;

export const ImageBackground = styled.View`
  opacity: 0.06;
  width: 290px;
  height: 290px;
  transform: rotate(45deg);
`;
