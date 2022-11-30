import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Header.module.css';

function Header() {
  console.log(NavLink);
  return (
    <header className={Classes.header}>
      <div className={Classes.header__conteiner}>
        <img src="./marvel_logo.svg" alt="" className={Classes.header__img} />

        <div className={Classes.header__routes}>
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive
                ? Classes.header__route + ' ' + Classes.active
                : Classes.header__route
            }
          >
            Characters
          </NavLink>
          <NavLink
            to="/comics"
            className={({ isActive }) =>
              isActive
                ? Classes.header__route + ' ' + Classes.active
                : Classes.header__route
            }
          >
            Comics
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive
                ? Classes.header__route + ' ' + Classes.active
                : Classes.header__route
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
