import React, { FC, useEffect } from 'react';
import SearchPage from '../../components/SearchPage/SearchPage';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

// Stores
import comicsStore from '../../stores/ComicsStore';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';

const Comics: FC = () => {
  const { t } = useTranslation();
  const { comics, count, loading, error } = comicsStore;
  const { page } = pageStore;
  const { nameStartsWith } = searchStore;
  useEffect(() => {
    if (nameStartsWith == '') {
      comicsStore.getComicsList((page - 1) * 20);
    } else {
      comicsStore.getComicsSearch(nameStartsWith, (page - 1) * 20);
    }
  }, [page, nameStartsWith]);

  if (error) return <div>{t('error')}</div>;
  return (
    <>
      <SearchBar pageName={t('comics_title')} count={count} />
      {loading ? (
        <h1>{t('loading')}</h1>
      ) : (
        <SearchPage prop={comics} cathegory="comics" />
      )}
      <Pagination totalEntities={count} />
    </>
  );
};

export default observer(Comics);
