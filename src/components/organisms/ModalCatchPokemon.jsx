import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/ModalActions';

const ModalCatchPokemon = ({ turnModalState }) => (
  <div className="modal">
    <span className="modal__border-top" />
    <div className="modal__title">
      <h1>Capturaste un pokemon</h1>
      <p>Puedes verlo en la pokedex</p>
    </div>
    <div className="modal__buttons">
      <Link to="/" className="btn--danger" onClick={() => turnModalState(false)}>Capturar mas</Link>
      <Link to="/pokedex" className="btn--normal" onClick={() => turnModalState(false)}>Ver pokedex</Link>
    </div>
    <span className="modal__border-bottom" />
  </div>
);

const mapStateToProps = ({ ModalReducers }) => ({
  ModalReducers,
});

const mapDispatchToProps = {
  ...modalActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCatchPokemon);
