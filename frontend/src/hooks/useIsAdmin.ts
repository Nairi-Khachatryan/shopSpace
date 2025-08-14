import { useAppSelector } from '../app/hooks';

export const useIsAdmin = () => {
  return useAppSelector((state) => state.user.isAdmin);
};
