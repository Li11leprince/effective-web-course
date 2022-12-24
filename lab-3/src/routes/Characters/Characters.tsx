import SearchPage from '../../components/SearchPage/SearchPage';
import React, {
  useEffect,
  FC,
  useState,
  useMemo,
  useLayoutEffect
} from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

// Stores
import charactersStore from '../../stores/CharactersStore';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';

const Characters: FC = () => {
  // Translation
  const { t } = useTranslation();
  const { characters, count, loading, error } = charactersStore;
  const { page } = pageStore;
  const { nameStartsWith } = searchStore;
  useEffect(() => {
    if (nameStartsWith == '') {
      charactersStore.getCharactersList((page - 1) * 20);
    } else {
      charactersStore.getCharactersSearch(nameStartsWith, (page - 1) * 20);
    }
  }, [page, nameStartsWith]);
  if (error) return <div>{t('error')}</div>;
  return (
    <>
      <SearchBar pageName={t('characters_title')} count={count} />
      {loading ? (
        <h1>{t('loading')}</h1>
      ) : (
        <>
          <SearchPage prop={characters} cathegory="characters" />
        </>
      )}
      <Pagination totalEntities={count} />
    </>
  );
};

export default observer(Characters);
