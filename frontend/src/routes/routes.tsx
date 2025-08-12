import { NotFoundPage } from '../pages/notFoundPage/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Create } from '../pages/createProduct';
import { AppLayout } from '../layout/AppLayout';
import { Profile } from '../pages/userProfile';
import { SignIn } from '../pages/auth/signIn';
import { SignUp } from '../pages/auth/signUp';
import { Home } from '../pages/home';
import { ROUTES } from './paths';
import { AdminRoutes } from './AdminRoutes';
import { AdminProductsPage } from '../pages/adminProductsPage';

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
        path: ROUTES.NOT_FOUND_PATH,
        element: <NotFoundPage />,
      },
      {
        path: ROUTES.ADMIN_PRODUCTS,
        element: (
          <AdminRoutes>
            <AdminProductsPage />
          </AdminRoutes>
        ),
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
