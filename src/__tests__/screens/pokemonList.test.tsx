import React from 'react';
import { render } from '@testing-library/react-native';

import { PokemonList } from '../../screens/PokemonList';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
);

describe('PokemonList', () => {

    it('should have a list pokemon', () => {
        render(<PokemonList />, {wrapper: Providers});
    
    });
})

