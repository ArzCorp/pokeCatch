import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import '../style/Style.scss';

import PokemonCatch from '../pages/PokemonCatch';
import Pokedex from '../pages/Pokedex';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PokemonCatch} />
      <Route path="/pokedex" exact component={Pokedex} />
    </Switch>
  </BrowserRouter>
);

export default App;
