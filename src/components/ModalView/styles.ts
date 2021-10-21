import styled from 'styled-components/native';

export const  Container = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 35px;
`;

export const Header = styled.View`
    flex: 1;
    height: 20%;
    justify-content: flex-end;
`;

export const About = styled.Text`
    /* flex: 1; */
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 25px;
    text-transform: capitalize;
    margin-left: 20px;
    margin-bottom: 10px;
`;

export const Divider = styled.View`
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
    align-self: center;
`;
