import React from 'react';

import TwitterIcon from '../../assets/icons/Twitter.svg';
import MailIcon from '../../assets/icons/Mail.svg';

const Footer = () => (
  <>
    <footer className="footer">
      <section className="footer__Social">
        <p>Diseñado por @ArzateCompany</p>
        <div className="social__icons">
          <a href="https://twitter.com/ArzateCompany">
            <figure className="social__image-container">
              <img className="social__image" src={TwitterIcon} alt="icono de twitter" />
            </figure>
          </a>
          <a href="/">
            <figure className="social__image-container">
              <img className="social__image" src={MailIcon} alt="icono de correo" />
            </figure>
          </a>
        </div>
      </section>
      <section className="footer__data">
        <p className="data__title">Datos proporcionados por</p>
        <a className="data__link" href="https://pokeapi.co/">https://pokeapi.co/</a>
      </section>
    </footer>
  </>
);

export default Footer;
