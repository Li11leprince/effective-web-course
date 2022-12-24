import React, { useEffect, useMemo, useState } from 'react';
import classes from './SearchBar.module.css';
import { observer } from 'mobx-react-lite';
import useDebounce from '../../hooks/useDebounce';

//stores
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';

// const renderSwitch = function (location: string, nameStartsWith: string) {
//   switch (location) {
//     case 'characters':
//       if (nameStartsWith != '') {
//         charactersStore.getCharactersSearch(nameStartsWith);
//       } else {
//         charactersStore.getCharactersList();
//       }
//       break;
//     case 'comics':
//       if (nameStartsWith != '') {
//         comicsStore.getComicsSearch(nameStartsWith);
//       } else {
//         comicsStore.getComicsList();
//       }
//       break;
//     case 'series':
//       if (nameStartsWith != '') {
//         seriesStore.getSeriesSearch(nameStartsWith);
//       } else {
//         seriesStore.getSeriesList();
//       }
//       break;
//   }
// };

function SearchBar(props: { pageName: string; count: number }) {
  const [nameStartsWithClick, setNameStartsWithClick] = useState('');
  searchStore.getNameStartWith(useDebounce(nameStartsWithClick, 3000));
  return (
    <div className={classes.main}>
      <div className={classes.conteiner}>
        <h1 className={classes.pageName}>
          {props.pageName}{' '}
          <span className={classes.quantity}>({props.count})</span>
        </h1>
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Search for Characters by Name"
            className={classes.searchBar__input}
            onChange={(e) => {
              setNameStartsWithClick(e.target.value);
              pageStore.delPage();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default observer(SearchBar);
