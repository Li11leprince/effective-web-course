import React from 'react';
import EntityPage from '../../components/EntityPage/EntityPage';
import { comics } from '../../mock/Comics';
import { useParams } from 'react-router-dom';

const GetEntity = () => {
  const { id } = useParams();
  return comics.filter((comic) => comic.id == Number(id))[0];
};

function ComicEntity() {
  return (
    <EntityPage
      thumbnail={GetEntity().thumbnail}
      name={GetEntity().name}
      description={GetEntity().description}
      firstLinkTitle="Heroes"
      firstLinks={GetEntity().heroes.items}
    />
  );
}

export default ComicEntity;
