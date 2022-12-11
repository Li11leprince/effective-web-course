import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EntityPage from '../../components/EntityPage/EntityPage';

//store
import serialStore from '../../stores/SerialStore';

const SerialEntity: FC = () => {
  const { serial, loading, error } = serialStore;
  const { id } = useParams();

  useEffect(() => {
    serialStore.getSerial(id);
  }, []);

  if (error) return <div>ERROR!!!</div>;
  return <>{loading ? <h1>Loading...</h1> : <EntityPage entity={serial} />}</>;
};

export default observer(SerialEntity);
