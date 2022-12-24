import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction
} from 'mobx';

class PageStore {
  @observable
  page: number = 1;

  constructor() {
    makeObservable(this);
  }

  @action
  getPage = (page: number) => {
    runInAction(() => {
      this.page = page;
    });
  };

  @action
  delPage = () => {
    runInAction(() => {
      this.page = 1;
    });
  };
}

const pageStore = new PageStore();

export default pageStore;
