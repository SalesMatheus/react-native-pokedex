import React, {
    createContext,
    useCallback,
    useContext,
    ReactNode,
    useState,
} from 'react';

import Api from '../service/api';

const PokemonContext = createContext({} as PokemonContextProps);

interface PokemonContextProps {
    fetchPokemons(): Promise<void>;
    pokemons: PokemonListProps[];
}

export interface PokemonListProps extends ApiCallProps {
    image: string;
    id: number;
}

interface ApiCallProps {
    name: string;
    url: string;
}

interface PokemonContextProviderProps {
    children: ReactNode;
}

const PokemonContextProvider = ({ children }: PokemonContextProviderProps) => {
    const [pokemons, setPokemons] = useState<PokemonListProps[]>([]);

    const formatPokemonData = useCallback((data: ApiCallProps[]) => {
        return Array.from(data || [], (item: ApiCallProps) => {
            console.log(item)
            const pokemonId = item?.url.split('/')[6]
            const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

            return {
                ...item,
                id: pokemonId,
                image: pokemonImage,
            }
        });
    }, []);

    const fetchPokemons = useCallback(async () => {
        try {
            const response = await Api.get(`/pokemon?offset=0&limit=10`);
            //@ts-ignore
            const pokemonsDataFormatted = formatPokemonData(response?.data?.results);
            //@ts-ignore
            setPokemons(pokemonsDataFormatted)
        } catch (error) {
            //@ts-ignore
            throw new (error);
        }
    }, []);

    return (
        <PokemonContext.Provider value={{ fetchPokemons, pokemons, /*isLoadingMorePokemons*/ }}>
            {children}
        </PokemonContext.Provider>
    );
};

const usePokemonContext = (): any => {
    const context = useContext(PokemonContext);
    return context;
};

export { usePokemonContext, PokemonContextProvider };