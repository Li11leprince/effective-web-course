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

class SeriesStore {
  @observable
  series: ISerialResult[] = [];

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
  getSeriesList = async (offset?: number): Promise<void> => {
    try {
      this.loading = true;
      const data = (await api.getSeriesList(offset)).data;
      const count = data.total;
      const series = data.results;
      runInAction(() => {
        this.series = series;
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
  getSeriesSearch = async (
    nameStartsWith: string,
    offset?: number
  ): Promise<void> => {
    try {
      this.loading = true;
      const data = (await api.getSeriesSearch(nameStartsWith, offset)).data;
      const count = data.total;
      const series = data.results;
      runInAction(() => {
        this.series = series;
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

const seriesStore = new SeriesStore();

export default seriesStore;
