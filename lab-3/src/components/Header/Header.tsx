import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

// Stores
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';
import themeStore from '../../stores/ThemeStore';
import { observer } from 'mobx-react-lite';

const clearStores = () => {
  pageStore.delPage();
  searchStore.delNameStartWith();
};

function Header() {
  const { theme } = themeStore;
  return (
    <header className={classes.header}>
      <div className={classes.header__conteiner}>
        <img src="marvel_logo.svg" alt="" className={classes.header__img} />

        <div className={classes.header__routes}>
          <button
            onClick={() => themeStore.toggleTheme()}
            className={classes.themeButton}
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </button>
          <NavLink
            to="/characters"
            onClick={() => clearStores()}
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
            onClick={() => clearStores()}
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
            onClick={() => clearStores()}
            className={({ isActive }) =>
              isActive
                ? classes.header__route + ' ' + classes.active
                : classes.header__route
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={() => clearStores()}
            className={({ isActive }) =>
              isActive
                ? classes.header__route + ' ' + classes.active
                : classes.header__route
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default observer(Header);
