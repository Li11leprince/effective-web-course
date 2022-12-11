import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction
} from 'mobx';

class SearchStore {
  @observable
  nameStartsWith: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  getNameStartWith = (nameStartWith: string) => {
    runInAction(() => {
      this.nameStartsWith = nameStartWith;
    });
  };

  @action
  delNameStartWith = () => {
    runInAction(() => {
      this.nameStartsWith = '';
    });
  };
}

const searchStore = new SearchStore();

export default searchStore;
