import { useAppSelector } from '../app/hooks';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.user.email);

  return isAuth;
};
