import { fetch } from '@forge/api';

export const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    return data;
};