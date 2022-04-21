import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from './state';
import './styles.scss';
import './style.css';
import NavigationRoutes from './routes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <NavigationRoutes />
  </Provider>
);
