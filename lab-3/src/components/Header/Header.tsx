import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__conteiner}>
        <img src="marvel_logo.svg" alt="" className={classes.header__img} />

        <div className={classes.header__routes}>
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive
                ? classes.header__route + ' ' + classes.active
                : classes.header__route
            }
          >
            Characters
          </NavLink>
          <NavLink
            to="/comics"
            className={({ isActive }) =>
              isActive
                ? classes.header__route + ' ' + classes.active
                : classes.header__route
            }
          >
            Comics
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive
                ? classes.header__route + ' ' + classes.active
                : classes.header__route
            }
          >
            Series
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
