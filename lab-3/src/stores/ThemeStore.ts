import { observable, action, makeObservable } from 'mobx';

class ThemeStore {
  @observable
  theme: string = 'light';

  constructor() {
    makeObservable(this);
  }

  @action
  toggleTheme = () => {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else this.theme = 'light';
  };
}

const themeStore = new ThemeStore();

export default themeStore;
