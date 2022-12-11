import React from 'react';
import Card from '../../components/Card/Card';
import { ICard } from '../../types/Card';
import classes from './SearchPage.module.css';

interface ISearchPage {
  prop: ICard[];
  pageName: string;
}

function SearchPage(props: ISearchPage) {
  return (
    <main className={classes.main}>
      <div className={classes.conteiner}>
        <div className={classes.cards}>
          {props.prop.map((prop) => {
            return (
              <Card
                id={prop.id}
                thumbnail={prop.thumbnail}
                name={prop.name}
                title={prop.title}
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
