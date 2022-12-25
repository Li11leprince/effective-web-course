import React, { createContext } from 'react';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import api from './api/entities';
import { observer } from 'mobx-react-lite';

//stores
import themeStore from './stores/ThemeStore';

interface AppContextInterface {
  theme: string;
  toggleTheme(): void;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

function App() {
  const element = useRoutes(routes);
  const { theme } = themeStore;
  return (
    <div className="app" id={theme}>
      {element}
    </div>
  );
}

export default observer(App);
