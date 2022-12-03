import React from 'react';
import EntityPage from '../../components/EntityPage/EntityPage';
import { IEntity } from '../../types/Entity';
import { characters } from '../../mock/Characters';
import { useParams } from 'react-router-dom';

const GetEntity = () => {
  const { id } = useParams();
  return characters.filter((character) => character.id == Number(id))[0];
};

function CharacterEntity() {
  return (
    <EntityPage
      thumbnail={GetEntity().thumbnail}
      name={GetEntity().name}
      description={GetEntity().description}
      firstLinkTitle="Comics"
      secondLinkTitle="Series"
      firstLinks={GetEntity().comics.items}
      secondLinks={GetEntity().series.items}
    />
  );
}

export default CharacterEntity;
