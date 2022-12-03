import React from 'react';
import EntityPage from '../../components/EntityPage/EntityPage';
import { series } from '../../mock/Series';
import { useParams } from 'react-router-dom';

const GetEntity = () => {
  const { id } = useParams();
  return series.filter((serial) => serial.id == Number(id))[0];
};

function SerialEntity() {
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

export default SerialEntity;
