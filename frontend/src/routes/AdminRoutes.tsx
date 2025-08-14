import { useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface AdminRouteProps {
  children: ReactNode;
}

export const AdminRoutes = ({ children }: AdminRouteProps) => {
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const navigate = useNavigate();


  useEffect(() => {
    
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;
  return <>{children}</>;
};
