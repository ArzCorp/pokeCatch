import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo.svg';
import PokedexIMG from '../../assets/icons/Pokedex.svg';

const Header = () => (
  <>
    <header className="header">
      <Link to="/">
        <figure className="header__logo">
          <img src={Logo} alt="Logo de la pagina" />
        </figure>
      </Link>
      <nav className="navbar-header">
        <ul className="navbar-header__container">
          <Link to="/pokedex">
            <li className="navbar-header__item">
              <figure className="navbar-header__item_image">
                <img src={PokedexIMG} alt="Imagen de la pokedex" />
              </figure>
              Pokedex
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
