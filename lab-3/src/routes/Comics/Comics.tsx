import React, { FC, useEffect } from 'react';
import SearchPage from '../../components/SearchPage/SearchPage';
import { observer } from 'mobx-react-lite';

// Stores
import comicsStore from '../../stores/ComicsStore';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import searchStore from '../../stores/SearchStore';

const Comics: FC = () => {
  const { comics, count, loading, error } = comicsStore;
  useEffect(() => {
    comicsStore.getComicsList();
    return () => searchStore.delNameStartWith();
  }, []);

  if (error) return <div>ERROR!!!</div>;
  return (
    <>
      <SearchBar pageName="Characters" count={count} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <SearchPage prop={comics} pageName="Characters" />
      )}
      <Pagination totalEntities={count} />
    </>
  );
};

export default observer(Comics);
