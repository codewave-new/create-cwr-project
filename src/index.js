// Default Imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// Redux Imports
import { Store } from './state';

// Components Imports
import NavigationRoutes from './routes';

// Styles Imports
import './styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <NavigationRoutes />
  </Provider>
);
