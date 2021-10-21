import styled from 'styled-components/native';

export const  Container = styled.View`
    flex: 1;
    /* flex-direction: row; */
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 35px;
`;

export const Header = styled.View`
    height: 20%;
    justify-content: flex-end;
`;

export const About = styled.Text`
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
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 50px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    text-transform: capitalize;
`;
