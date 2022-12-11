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

class CharacterStore {
  @observable
  character: ICharacter[] = [];

  @observable
  loading: boolean = true;

  @observable
  error: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacter = async (id: string | undefined): Promise<void> => {
    try {
      this.loading = true;
      const character = (await api.getCharacter(id)).data.results;
      runInAction(() => {
        this.character = character;
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

const characterStore = new CharacterStore();
export default characterStore;
