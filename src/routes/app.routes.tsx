import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PokemonList } from '../screens/PokemonList';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator 
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName={'PokemonsList'}
    >
        <Screen 
            name="PokemonList"
            component={PokemonList}
        />
    </Navigator>
  );
}