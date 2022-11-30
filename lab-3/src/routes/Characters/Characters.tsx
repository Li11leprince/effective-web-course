import React from 'react';
import Card from '../../components/Card/Card';
import Classes from './Characters.module.css';

import { characters } from '../../mock/Characters';

function Characters() {
  return (
    <main className={Classes.main}>
      <div className={Classes.conteiner}>
        <h1 className={Classes.pageName}>
          Characters{' '}
          <span className={Classes.quantity}>({characters.length})</span>
        </h1>
        <div className={Classes.searchBar}>
          <input
            type="text"
            placeholder="Search for Characters by Name"
            className={Classes.searchBar__input}
          />
          <button className={Classes.searchBar__button}>Search</button>
        </div>
        <div className={Classes.cards}>
          {characters.map((character) => {
            return (
              <Card
                thumbnail={character.thumbnail}
                name={character.name}
                description={character.description}
                key={character.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Characters;
