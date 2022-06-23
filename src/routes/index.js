import { useRoutes } from 'react-router-dom';
import { appRoutes } from './routes';

const NavigationRoutes = () => {
  const routes = useRoutes(appRoutes);
  return routes;
};

export default NavigationRoutes;
