import ForgeUI, { Fragment, Text, Button, useState } from '@forge/ui';
import { fetchPokemon } from '../api/remoteApi';

const pokemonButton = () =>{
    const [pokemon, setPokemon] = useState(null);
    
    const handleClick = async () => {
        const data = await fetchPokemon();
        setPokemon(data);
    };

    return (
        <Fragment>
            <Button text="Call Pokemon Api" onClick={handleClick} />
            {pokemon && (
                <Fragment>
                <Text>{`Name: ${pokemon.name}`}</Text>
                <Text>{`Height: ${pokemon.height}`}</Text>
                <Text>{`Weight: ${pokemon.weight}`}</Text>
                </Fragment>
            )}
        </Fragment>
    )
}

export default pokemonButton;