/**
 * Global file for all routes
 */

import Home from '../pages/home';
import Login from '../pages/login';

export const appRoutes = [
  {
    id: 'SOME_UNIQUE_STRING',
    path: '/',
    protected: true, // if true then login required to access the route
    component: Home,
  },
  {
    id: 'ANOTHER_UNIQUE_STRING',
    path: '/login',
    protected: false, // if true then login required to access the route
    component: Login,
  },
];
