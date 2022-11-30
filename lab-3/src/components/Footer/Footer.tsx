import React from 'react';
import classes from './Footer.module.css';

function Header() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__conteiner}>
        <img src="./marvel_logo.svg" alt="" className={classes.footer__img} />

        <p className={classes.footer__copyright}>
          Data provided by Marvel. © {new Date().getFullYear()}
        </p>
        <a
          href="https://developer.marvel.com"
          className={classes.footer__link}
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
