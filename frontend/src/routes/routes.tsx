import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { Home } from '../pages/home';
import { Create } from '../pages/createProduct';
// import { SignIn } from '../auth/signIn';
import { ROUTES } from './paths';
import { Profile } from '../pages/userProfile';
import { SignIn } from '../pages/auth/signIn';
import { SignUp } from '../pages/auth/signUp';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PATH,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUp />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.CREATE,
            element: <Create />,
          },
          {
            path: ROUTES.PROFILE,
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
