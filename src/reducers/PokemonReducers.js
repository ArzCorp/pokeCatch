const INITIAL_STATE = {
  loading: false,
  error: '',
  pokemon: [],
  catchedPokemon: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'error':
      return {
        ...state,
        error: action.payload,
      };
    case 'getPokemon':
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
        weHavePokemon: true,
      };
    case 'cacthPokemon':
      return {
        ...state,
        catchpokemon: action.payload,
        loading: false,
      };
    default: return state;
  }
};
