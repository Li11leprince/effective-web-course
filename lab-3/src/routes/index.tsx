import React from 'react';
import type { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import Characters from './Characters/Characters';
import Comics from './Comics/Comics';
import Home from './Home/Home';
import Series from './Series/Series';

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
      { path: '*', element: <div className="">Page is not found</div> }
    ]
  }
];

export default routes;
