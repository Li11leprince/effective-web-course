import React from 'react';
import Card from '../../components/Card/Card';
import Classes from './Comics.module.css';

import { comics } from '../../mock/Comics';

function Comics() {
  return (
    <main className={Classes.main}>
      <div className={Classes.conteiner}>
        <h1 className={Classes.pageName}>
          Comics{' '}
          <span className={Classes.quantity}>
            ({comics[0].data.results.length})
          </span>
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
          {comics[0].data.results.map((comic) => {
            return (
              <Card
                thumbnail={comic.thumbnail}
                name={comic.title}
                description={comic.description}
                key={comic.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Comics;
