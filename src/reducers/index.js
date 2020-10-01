import { combineReducers } from 'redux';

import PokemonReducers from './PokemonReducers';
import ModalReducers from './ModalReducers';

export default combineReducers({
  PokemonReducers,
  ModalReducers,
});
