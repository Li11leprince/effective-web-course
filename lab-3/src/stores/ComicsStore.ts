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
import { IComicResult } from './../types/Comics';

class ComicsStore {
  @observable
  comics: IComicResult[] = [];

  @observable
  count: number = 0;

  @observable
  loading: boolean = true;

  @observable
  error: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async (offset?: number): Promise<void> => {
    try {
      this.loading = true;
      const data = (await api.getComicsList(offset)).data;
      const count = data.total;
      const comics = data.results;
      runInAction(() => {
        this.comics = comics;
        this.count = count;
        this.error = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
      });
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getComicsSearch = async (
    nameStartsWith: string,
    offset?: number
  ): Promise<void> => {
    try {
      this.loading = true;
      const data = (await api.getComicsSearch(nameStartsWith, offset)).data;
      const count = data.total;
      const comics = data.results;
      runInAction(() => {
        this.comics = comics;
        this.count = count;
        this.error = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
      });
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const comicsStore = new ComicsStore();

export default comicsStore;
