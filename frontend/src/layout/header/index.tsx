import { CartModalTrigger } from './cartModalTrigger/CartModalTrigger';
import { ThemeToggleButton } from './themeToggleBtn/ThemeToggleButton';
import { AuthButtons } from './authButtons/AuthButtons';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';
import s from './index.module.scss';
import Logo from './logo/Logo';

export const Header = () => {
  const { theme, handleChangeTheme } = useTheme();
  const isAuth = useAuth();

  return (
    <header className={`${s[`header-${theme}`]}`}>
      <div className={s.logoBlock}>
        <Logo theme={theme} />
      </div>
      <div className={s.buttonsContainer}>
        <ThemeToggleButton theme={theme} onToggle={handleChangeTheme} />
        <AuthButtons isAuth={!!isAuth} />
        <CartModalTrigger theme={theme} />
      </div>
    </header>
  );
};
