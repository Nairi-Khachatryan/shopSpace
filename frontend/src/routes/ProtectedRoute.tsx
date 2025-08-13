import { Outlet, Navigate } from 'react-router-dom';
import { ROUTES } from './paths';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = () => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return <Outlet />;
};
