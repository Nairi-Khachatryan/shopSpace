import { NotFoundPage } from '../components/notFound/NotFoundPage';
import { CreateProduct } from '../components/admin/createProduct';
import { UpdateProduct } from '../components/admin/updateProduct';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { AppLayout } from '../layout/AppLayout';
import { SignIn } from '../pages/auth/signIn';
import { SignUp } from '../pages/auth/signUp';
import { AdminRoutes } from './AdminRoutes';
import { Profile } from '../pages/profile';
import { Home } from '../pages/home';
import { ROUTES } from './paths';

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
            <CreateProduct />
          </AdminRoutes>
        ),
      },
      {
        path: ROUTES.ADMIN_UPDATES,
        element: (
          <AdminRoutes>
            <UpdateProduct />
          </AdminRoutes>
        ),
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.PROFILE,
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
