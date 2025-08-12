import { useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface AdminRouteProps {
  children: ReactNode;
}

export const AdminRoutes = ({ children }: AdminRouteProps) => {
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const navigate = useNavigate();

  console.log(isAdmin, 'isadmin')

  useEffect(() => {
    console.log('effect admin')
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return <>{children}</>;
};
