import { Outlet, Navigate } from 'react-router-dom';
import { ROUTES } from './paths';

export const ProtectedRoute = () => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return <Outlet />;
};
