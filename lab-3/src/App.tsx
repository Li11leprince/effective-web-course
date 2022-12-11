import React from 'react';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import api from './api/entities';

function App() {
  const element = useRoutes(routes);
  /*api.getCharactersList().then((output) => console.log(output));
  console.log(api.getCharactersList());*/
  return <div className="app">{element}</div>;
}

export default App;
