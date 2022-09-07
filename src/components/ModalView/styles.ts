import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 35px;
  padding-right: 19px;
  /* padding-bottom: 160px; */
`;

export const Header = styled.View`
  height: 20%;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 25px;
  text-transform: capitalize;
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const Divider = styled.View`
  width: 90%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
  align-self: center;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const Measures = styled.View`
  padding: 10px 70px;
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
`;

export const ContentTitle = styled.View``;

export const TextTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  text-transform: capitalize;
`;

export const ContentDescription = styled.View``;

export const TextDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 16px;
  margin-left: 10px;
`;

export const PokemonDescription = styled.View``;

export const PokemonDescriptionTitle = styled.View``;

export const PokemonDescriptionContent = styled.View`
  width: 36%;
`;

export const DescriptionStats = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-transform: capitalize;
  padding: 5px 40px;
`;

export const DescriptionNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 16px;
  text-transform: capitalize;
  padding: 5px 0px;
`;

export const PokemonNumberContent = styled.View`
  /* width: 35%; */
`;

export const PokemonStats = styled.View`
  flex-direction: row;
`;

export const PokemonStatBar = styled.View`
  flex: 1;
  margin-top: 14px;
  margin-left: 10px;
  background-color: #eee;
  height: 3px;
  border-radius: 10px;
  overflow: hidden;
`;
