import React from 'react';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  return <div className="app">{element}</div>;
}

export default App;
