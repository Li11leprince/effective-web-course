import React from 'react';
import Card from '../../components/Card/Card';
import { IMock } from '../../types/Mock';
import classes from './SearchPage.module.css';

interface ISearchPage {
  prop: IMock[];
  pageName: string;
}

function SearchPage(props: ISearchPage) {
  return (
    <main className={classes.main}>
      <div className={classes.conteiner}>
        <h1 className={classes.pageName}>
          {props.pageName}{' '}
          <span className={classes.quantity}>({props.prop.length})</span>
        </h1>
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Search for Characters by Name"
            className={classes.searchBar__input}
          />
          <button className={classes.searchBar__button}>Search</button>
        </div>
        <div className={classes.cards}>
          {props.prop.map((prop) => {
            return (
              <Card
                id={prop.id}
                thumbnail={prop.thumbnail}
                name={prop.name}
                description={prop.description}
                key={prop.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
