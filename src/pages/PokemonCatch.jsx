import React from 'react';
import { connect } from 'react-redux';

import * as pokemonActions from '../actions/PokemonActions';
import * as modalActions from '../actions/ModalActions';

import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Button from '../components/atoms/Button';
import Modal from '../components/molecules/Modal';

const PokemonCatch = ({
  getPokemon, catchPokemon, turnModalState, PokemonReducers: { pokemon }, ModalReducers: { isOpenModal },
}) => {
  const printPokemon = () => {
    if (pokemon.id) {
      return (
        <figure className="pokemon__image-container">
          <img className="pokemon__image" src={pokemon.sprites.front_default} alt="Imagen de pokemon" />
        </figure>
      );
    }
    return (
      <p>Cargando pokemon</p>
    );
  };

  return (
    <>
      <Header />
      <section className="main-pokemon">
        <div className="main-pokemon__buttons">
          <Button name="Capturar" className="normal" icon="PokebolaIMG" onClick={() => { catchPokemon(pokemon); turnModalState(true); }} />
          <Button name="Ahuyentar" className="danger" icon="RepelentIMG" onClick={getPokemon} />
        </div>
        <div className="main-pokemon__pokemon">
          {printPokemon()}
        </div>
      </section>
      <Modal isOpen={isOpenModal} />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ PokemonReducers, ModalReducers }) => ({
  PokemonReducers,
  ModalReducers,
});

const mapDispatchToProps = {
  ...pokemonActions,
  ...modalActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCatch);
