import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EntityPage from '../../components/EntityPage/EntityPage';

//store
import characterStore from '../../stores/CharacterStore';

const CharacterEntity: FC = () => {
  const { character, loading, error } = characterStore;
  const { id } = useParams();

  useEffect(() => {
    characterStore.getCharacter(id);
  }, []);

  if (error) return <div>ERROR!!!</div>;
  return (
    <>{loading ? <h1>Loading...</h1> : <EntityPage entity={character} />}</>
  );
};

export default observer(CharacterEntity);
