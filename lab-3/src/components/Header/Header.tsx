import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

// Stores
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';
import themeStore from '../../stores/ThemeStore';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

const clearStores = () => {
  pageStore.delPage();
  searchStore.delNameStartWith();
};

function Header() {
  const { t, i18n } = useTranslation();
  const { theme } = themeStore;
  return (
    <header className={classes.header}>
      <div className={classes.header__conteiner}>
        <img src="marvel_logo.svg" alt="" className={classes.header__img} />

        <div className={classes.header__routes}>
          <select
            value={localStorage.getItem('i18nextLng') ?? 'ru'}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              localStorage.setItem('i18nextLng', e.target.value);
            }}
          >
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>
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
            {t('characters_title')}
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
            {t('comics_title')}
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
            {t('series_title')}
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
            {t('favorites_title')}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default observer(Header);
