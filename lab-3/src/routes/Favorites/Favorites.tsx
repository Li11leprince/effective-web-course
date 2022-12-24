import SearchPage from '../../components/SearchPage/SearchPage';
import React, {
  useEffect,
  FC,
  useState,
  useMemo,
  useLayoutEffect
} from 'react';
import { observer } from 'mobx-react-lite';
import classes from './Favorites.module.css';

// Stores
import favoriteStore from '../../stores/FavoritesStore';
import Card from '../../components/Card/Card';

const Favorites: FC = () => {
  useEffect(() => {
    favoriteStore.getFavorites();
  }, []);
  return (
    <main className={classes.main}>
      <div className={classes.conteiner}>
        <div className={classes.cards}>
          {favoriteStore.cards.map((prop) => {
            return (
              <Card
                id={prop.id}
                thumbnail={prop.thumbnail}
                name={prop.name}
                title={prop.title}
                description={prop.description}
                key={prop.id}
                cathegory={prop.cathegory}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default observer(Favorites);
