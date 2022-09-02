import { renderHook, act } from '@testing-library/react-hooks';

import {
  usePokemonContext,
  PokemonContextProvider,
} from '../../hooks/pokemonContext';

describe('PokemonList', () => {
  it('should have a list pokemon', async () => {
    const { result } = renderHook(() => usePokemonContext(), {
      wrapper: PokemonContextProvider,
    });

    await act(() => result.current.fetchPokemons());

    // console.log(result.current.pokemons)
    expect(result.current.pokemons).toBeTruthy();
  });
});
