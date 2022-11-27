import React from 'react';
import Card from '../../components/Card/Card';
import Classes from './Series.module.css';

import { series } from '../../mock/Series';

function Series() {
  return (
    <main className={Classes.main}>
      <div className={Classes.conteiner}>
        <h1 className={Classes.pageName}>
          Series <span className={Classes.quantity}>({series.length})</span>
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
          {series.map((serial) => {
            return (
              <Card
                thumbnail={serial.thumbnail}
                name={serial.title}
                description={serial.description}
                key={serial.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Series;
