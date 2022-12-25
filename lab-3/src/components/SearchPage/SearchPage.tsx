import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { ICard } from '../../types/Card';
import classes from './SearchPage.module.css';

//stores
import favoriteStore from '../../stores/FavoritesStore';
import { observer } from 'mobx-react-lite';

interface ISearchPage {
  prop: ICard[];
  cathegory: string;
}

function SearchPage(props: ISearchPage) {
  favoriteStore.getFavorites();
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
                cathegory={props.cathegory}
                key={prop.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default observer(SearchPage);
