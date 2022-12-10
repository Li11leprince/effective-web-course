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
import { ICharacter } from './../types/Heroes';

class CharactersStore {
  @observable
  characters: ICharacter[] = [];

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
  getCharactersList = async (offset?: number): Promise<void> => {
    try {
      this.loading = true;
      const data = (await api.getCharactersList(offset)).data;
      const count = data.total;
      const characters = data.results;
      runInAction(() => {
        this.characters = characters;
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
  getCharactersSearch = async (
    nameStartsWith: string,
    offset?: number
  ): Promise<void> => {
    try {
      this.loading = true;
      const data = (await api.getCharactersSearch(nameStartsWith, offset)).data;
      const count = data.total;
      const characters = data.results;
      runInAction(() => {
        this.characters = characters;
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

const charactersStore = new CharactersStore();
export default charactersStore;
