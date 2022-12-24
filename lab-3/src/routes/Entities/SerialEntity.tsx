import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import EntityPage from '../../components/EntityPage/EntityPage';

//store
import serialStore from '../../stores/SerialStore';

const SerialEntity: FC = () => {
  const { t } = useTranslation();
  const { serial, loading, error } = serialStore;
  const { id } = useParams();

  useEffect(() => {
    serialStore.getSerial(id);
  }, []);

  if (error) return <div>{t('error')}</div>;
  return (
    <>{loading ? <h1>{t('loading')}</h1> : <EntityPage entity={serial} />}</>
  );
};

export default observer(SerialEntity);
