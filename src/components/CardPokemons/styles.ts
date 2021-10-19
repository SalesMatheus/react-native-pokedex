import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 25px;
    height: 170px;
    padding: 25px 20px;
    margin: 10px 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ImageBackground = styled.View`
    position: absolute;
    opacity: 0.06;
    width: 216px;
    height: 220px;
`;

export const PokemonInfo = styled.View`
`;

export const Number = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 20px;
    text-transform: capitalize;
`;


export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.shape};
    font-size: 31px;
    text-transform: capitalize;
`;

export const PokemonImage = styled.View`
    width: 165px;
    height: 170px;

`;
