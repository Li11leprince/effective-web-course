import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction
} from 'mobx';

// API
import api from '../api/entities';

// Types
import { ICard } from './../types/Card';

class FavoriteStore {
  @observable
  cards: ICard[] = [];

  @observable
  loading: boolean = true;

  @observable
  error: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getFavorites = async (): Promise<void> => {
    runInAction(() => {
      this.cards = JSON.parse(localStorage.getItem('favorites') || '[]');
      this.error = false;
    });
  };

  @action
  addFavorite = async (likedCard: ICard): Promise<void> => {
    runInAction(() => {
      this.cards.push(likedCard);
      localStorage.setItem(`favorites`, JSON.stringify(this.cards));
    });
  };

  @action
  removeFavorite = async (likedCard: ICard): Promise<void> => {
    runInAction(() => {
      const cardToRemove = this.cards.indexOf(likedCard);
      console.log(likedCard.id);
      this.cards = this.cards.filter((x) => x.id != likedCard.id);
      console.log(this.cards.length);
      localStorage.setItem(`favorites`, JSON.stringify(this.cards));
    });
  };

  isLiked = (likedCard: ICard): boolean => {
    let isLiked = false;
    this.cards.forEach((card) => {
      if (card.id == likedCard.id) {
        isLiked = true;
      }
    });
    return isLiked;
  };
}

const favoriteStore = new FavoriteStore();

export default favoriteStore;
