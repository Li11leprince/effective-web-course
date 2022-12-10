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
import { ISerialResult } from './../types/Series';

class SerialStore {
  @observable
  serial: ISerialResult[] = [];

  @observable
  loading: boolean = true;

  @observable
  error: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getSerial = async (id: string | undefined): Promise<void> => {
    try {
      this.loading = true;
      const serial = (await api.getSerial(id)).data.results;
      runInAction(() => {
        this.serial = serial;
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

const serialStore = new SerialStore();

export default serialStore;
