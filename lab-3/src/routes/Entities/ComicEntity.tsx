import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EntityPage from '../../components/EntityPage/EntityPage';

//store
import comicStore from '../../stores/ComicStore';

const ComicEntity: FC = () => {
  const { comic, loading, error } = comicStore;
  const { id } = useParams();

  useEffect(() => {
    comicStore.getComic(id);
  }, []);

  if (error) return <div>ERROR!!!</div>;
  return <>{loading ? <h1>Loading...</h1> : <EntityPage entity={comic} />}</>;
};

export default observer(ComicEntity);
