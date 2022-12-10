import SearchPage from '../../components/SearchPage/SearchPage';
import React, { useEffect, FC, useState, useMemo } from 'react';
import classes from './Pagination.module.css';

//stores
import charactersStore from '../../stores/CharactersStore';
import comicsStore from '../../stores/ComicsStore';
import seriesStore from '../../stores/SeriesStore';
import searchStore from '../../stores/SearchStore';

const renderSwitch = function (
  location: string,
  nameStartsWith: string,
  offset?: number
) {
  switch (location) {
    case 'characters':
      if (nameStartsWith != '') {
        charactersStore.getCharactersSearch(nameStartsWith, offset);
      } else {
        charactersStore.getCharactersList(offset);
      }
      break;
    case 'comics':
      if (nameStartsWith != '') {
        comicsStore.getComicsSearch(nameStartsWith, offset);
      } else {
        comicsStore.getComicsList(offset);
      }
      break;
    case 'series':
      if (nameStartsWith != '') {
        seriesStore.getSeriesSearch(nameStartsWith, offset);
      } else {
        seriesStore.getSeriesList(offset);
      }
      break;
  }
};

const getPageCount = (totalEntities: number, limit: number) => {
  return Math.ceil(totalEntities / limit);
};

const fillArray = (pageCount: number) => {
  const pagesArray: number[] = [];
  for (let i = 0; i < pageCount; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
};

const Pagination = (prop: { totalEntities: number }) => {
  const [pagies, setPagies] = useState([1]);
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(1);
  const { nameStartsWith } = searchStore;
  const pageCount = useMemo(
    () => getPageCount(prop.totalEntities, 20),
    [prop.totalEntities]
  );
  useMemo(() => {
    setLocation(window.location.pathname.split('/').slice(-1)[0]);
  }, []);
  console.log(nameStartsWith);
  const pagesArray = useMemo(() => fillArray(pageCount), [prop.totalEntities]);
  useEffect(() => {
    if (page < pageCount - 1) {
      if (page == 1) {
        setPagies([
          pagesArray[0], //1
          pagesArray[page], //2
          pagesArray[page + 1], //3
          pagesArray[page + 2], //3
          pagesArray[pageCount - 1] //last
        ]);
      } else if (page == 2) {
        setPagies([
          pagesArray[0], //1
          pagesArray[page - 1], //2
          pagesArray[page], //3
          pagesArray[page + 1], //4
          pagesArray[pageCount - 1]
        ]);
      } else if (page > 2) {
        setPagies([
          pagesArray[0], //1
          pagesArray[page - 2], //2
          pagesArray[page - 1], //3
          pagesArray[page], //4
          pagesArray[pageCount - 1]
        ]);
      }
    } else if (page == pageCount) {
      setPagies([
        pagesArray[0], //1
        pagesArray[page - 4], //2
        pagesArray[page - 3], //2
        pagesArray[page - 2], //2
        pagesArray[page - 1] //3
      ]);
    } else if (page == pageCount - 1) {
      setPagies([
        pagesArray[0], //1
        pagesArray[page - 3], //2
        pagesArray[page - 2], //2
        pagesArray[page - 1], //2
        pagesArray[page] //3
      ]);
    }
  }, [page, prop.totalEntities]);
  console.log(pagies);
  useEffect(() => {
    renderSwitch(location, nameStartsWith, (page - 1) * 20);
  }, [page]);
  return (
    <div className={classes.paginationBlock}>
      {pagies.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={
            page === p
              ? `${classes.paginationItem} ${classes.pageCurrent}`
              : classes.paginationItem
          }
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
