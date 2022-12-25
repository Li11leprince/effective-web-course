import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import EntityPage from '../../components/EntityPage/EntityPage';

//store
import comicStore from '../../stores/ComicStore';

const ComicEntity: FC = () => {
  const { t } = useTranslation();
  const { comic, loading, error } = comicStore;
  const { id } = useParams();

  useEffect(() => {
    comicStore.getComic(id);
  }, []);

  if (error) return <div>{t('error')}</div>;
  return (
    <>{loading ? <h1>{t('loading')}</h1> : <EntityPage entity={comic} />}</>
  );
};

export default observer(ComicEntity);
