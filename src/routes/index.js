import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { appRoutes } from './routes';

const NavigationRoutes = () => (
  <BrowserRouter>
    {appRoutes.map((route) => {
      const isProtected = route.protected;
      return isProtected ? (
        <PrivateRoute exact path={route.path} component={route.component} />
      ) : (
        <Route exact path={route.path} component={route.component} />
      );
    })}
  </BrowserRouter>

  // <Route path='*' element={<p>Page not found</p>} />
);

export default NavigationRoutes;
