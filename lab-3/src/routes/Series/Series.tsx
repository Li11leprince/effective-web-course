import SearchPage from '../../components/SearchPage/SearchPage';
import React, { useEffect, FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import seriesStore from '../../stores/SeriesStore';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import searchStore from '../../stores/SearchStore';

const Series: FC = () => {
  const { series, count, loading, error } = seriesStore;
  useEffect(() => {
    seriesStore.getSeriesList();
    return () => searchStore.delNameStartWith();
  }, []);

  if (error) return <div>ERROR!!!</div>;
  return (
    <>
      <SearchBar pageName="Characters" count={count} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <SearchPage prop={series} pageName="Characters" />
      )}
      <Pagination totalEntities={count} />
    </>
  );
};

export default observer(Series);
