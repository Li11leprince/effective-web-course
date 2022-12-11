import SearchPage from '../../components/SearchPage/SearchPage';
import React, { useEffect, FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import charactersStore from '../../stores/CharactersStore';

import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import searchStore from '../../stores/SearchStore';

const Characters: FC = () => {
  const { characters, count, loading, error } = charactersStore;
  useEffect(() => {
    charactersStore.getCharactersList();
    return () => searchStore.delNameStartWith();
  }, []);

  if (error) return <div>ERROR!!!</div>;
  return (
    <>
      <SearchBar pageName="Characters" count={count} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <SearchPage prop={characters} pageName="Characters" />
        </>
      )}
      <Pagination totalEntities={count} />
    </>
  );
};

export default observer(Characters);
