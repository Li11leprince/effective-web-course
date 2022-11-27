import React from 'react';
import Classes from './Footer.module.css';

function Header() {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.footer__conteiner}>
        <img src="./marvel_logo.svg" alt="" className={Classes.footer__img} />

        <p className={Classes.footer__copyright}>
          Data provided by Marvel. © {new Date().getFullYear()}
        </p>
        <a
          href="https://developer.marvel.com"
          className={Classes.footer__link}
          target="_blank"
          rel="noreferrer"
        >
          developer.marvel.com
        </a>
      </div>
    </footer>
  );
}

export default Header;
