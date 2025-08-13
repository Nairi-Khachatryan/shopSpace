import { useTheme } from '../../hooks/useTheme';
import s from './index.module.scss';

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${s[`footer-${theme}`]}`}>
      <p>&copy; 2025 Shop Space. All rights reserved.</p>
    </footer>
  );
};
