import { useTheme } from '../../hooks/useTheme';
import s from './index.module.scss';

export const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className={theme === 'light' ? s.homeContainerLight : s.homeContainerDark}
    ></div>
  );
};
