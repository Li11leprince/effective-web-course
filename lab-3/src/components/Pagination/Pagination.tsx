import SearchPage from '../../components/SearchPage/SearchPage';
import React, { useEffect, FC, useState, useMemo } from 'react';
import classes from './Pagination.module.css';

//stores
import pageStore from '../../stores/PageStore';

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
  const { page } = pageStore;
  const pageCount = useMemo(
    () => getPageCount(prop.totalEntities, 20),
    [prop.totalEntities]
  );
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
  return (
    <div className={classes.paginationBlock}>
      {pagies.map((p) => (
        <button
          key={p}
          onClick={() => pageStore.getPage(p)}
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
