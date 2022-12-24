import SearchPage from '../../components/SearchPage/SearchPage';
import React, {
  useEffect,
  FC,
  useState,
  useMemo,
  useLayoutEffect
} from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import seriesStore from '../../stores/SeriesStore';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';

const Series: FC = () => {
  const { series, count, loading, error } = seriesStore;
  const { page } = pageStore;
  const { nameStartsWith } = searchStore;
  useEffect(() => {
    if (nameStartsWith == '') {
      seriesStore.getSeriesList((page - 1) * 20);
    } else {
      seriesStore.getSeriesSearch(nameStartsWith, (page - 1) * 20);
    }
  }, [page, nameStartsWith]);

  if (error) return <div>ERROR!!!</div>;
  return (
    <>
      <SearchBar pageName="Series" count={count} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <SearchPage prop={series} cathegory="series" />
      )}
      <Pagination totalEntities={count} />
    </>
  );
};

export default observer(Series);
