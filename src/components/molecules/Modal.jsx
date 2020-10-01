import React from 'react';
import { createPortal } from 'react-dom';
import ModalCatchPokemon from '../organisms/ModalCatchPokemon';

const Modal = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className="modal__container">
      <ModalCatchPokemon />
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
