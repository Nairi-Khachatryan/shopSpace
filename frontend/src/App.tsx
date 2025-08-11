import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './styles/globals.scss';


export const App = () => {
  return <RouterProvider router={router} />;
};
