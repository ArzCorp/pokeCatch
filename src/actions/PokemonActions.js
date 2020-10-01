const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = () => async (dispatch) => {
  let pokemonRandom;
  const getRandomPokemon = (max, min) => {
    pokemonRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  };

  try {
    getRandomPokemon(300, 1);
    dispatch({
      type: 'loading',
      payload: true,
    });
    const response = await fetch(`${URL}${pokemonRandom}`);
    const data = await response.json();
    dispatch({
      type: 'getPokemon',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'error',
      payload: 'No encontramos pokemon, intenta mas tarde',
    });
  }
};

export const catchPokemon = (pokemon) => (dispatch, getState) => {
  const { catchedPokemon } = getState().PokemonReducers;
  const updatePokemon = catchedPokemon.push(pokemon);

  dispatch({
    type: 'catchPokemon',
    payload: updatePokemon,
  });
};
