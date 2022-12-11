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

class ComicStore {
  @observable
  comic: IComicResult[] = [];

  @observable
  loading: boolean = true;

  @observable
  error: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComic = async (id: string | undefined): Promise<void> => {
    try {
      this.loading = true;
      const comic = (await api.getComic(id)).data.results;
      runInAction(() => {
        this.comic = comic;
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

const comicStore = new ComicStore();

export default comicStore;
