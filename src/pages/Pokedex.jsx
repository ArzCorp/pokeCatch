import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

import * as pokemonActions from '../actions/PokemonActions';

const Pokedex = ({ PokemonReducers: { catchedPokemon } }) => {
  const printPokemon = () => {
    if (!catchedPokemon.length) {
      return (
        <div className="messaje-box">
          <div className="messaje-box__container">
            <h1>No tienes pokemon</h1>
            <Link to="/" className="btn--normal">Capturar pokemon</Link>
          </div>
        </div>
      );
    }
    return (
      catchedPokemon.map((pokemon) => (
        <div key={pokemon.id} className="pokedex__figure">
          <div className="pokedex__image-container">
            <img className="pokedex__image-pokemon" src={pokemon.sprites.front_default} alt="Imagen del pokemon" />
          </div>
          <div className="pokedex__controls">
            <h1 className="controls__name-pokemon">{pokemon.name}</h1>
          </div>
        </div>
      ))
    );
  };

  return (
    <>
      <Header />
      <section className="pokedex">
        {printPokemon()}
      </section>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ PokemonReducers }) => ({
  PokemonReducers,
});

const mapDispatchToProps = {
  ...pokemonActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
