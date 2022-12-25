import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import EntityPage from '../../components/EntityPage/EntityPage';

//store
import characterStore from '../../stores/CharacterStore';

const CharacterEntity: FC = () => {
  const { t } = useTranslation();
  const { character, loading, error } = characterStore;
  const { id } = useParams();

  useEffect(() => {
    characterStore.getCharacter(id);
  }, []);

  if (error) return <div>{t('error')}</div>;
  return (
    <>{loading ? <h1>{t('loading')}</h1> : <EntityPage entity={character} />}</>
  );
};

export default observer(CharacterEntity);
