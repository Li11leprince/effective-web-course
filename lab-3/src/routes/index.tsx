import React, { Children } from 'react';
import type { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import Characters from './Characters/Characters';
import Comics from './Comics/Comics';
import Home from './Home/Home';
import Series from './Series/Series';
import CharacterEntity from './Entities/CharacterEntity';
import ComicEntity from './Entities/ComicEntity';
import SerialEntity from './Entities/SerialEntity';
import Favorites from './Favorites/Favorites';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/characters',
        element: <Characters />
      },
      {
        path: '/comics',
        element: <Comics />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/characters/:id',
        element: <CharacterEntity />
      },
      {
        path: '/comics/:id',
        element: <ComicEntity />
      },
      {
        path: '/series/:id',
        element: <SerialEntity />
      },
      { path: '*', element: <div className="">Page is not found</div> }
    ]
  }
];

export default routes;
