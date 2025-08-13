import { logOutUser } from '../../features/user/userSlice';
import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';
import { IoSunnyOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../app/hooks';
import { FaCartShopping } from 'react-icons/fa6';
import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../routes/paths';
import { BsCart3 } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import s from './index.module.scss';

export const Header = () => {
  const { theme, handleChangeTheme } = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAuth();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <header className={`${s[`header-${theme}`]}`}>
      <div className={s.logoBlock}>
        {theme === 'light' ? (
          <img
            onClick={() => navigate(ROUTES.HOME_PATH)}
            className={`${s[`logo-${theme}`]}`}
            src={logoLight}
            alt="logo"
          ></img>
        ) : (
          <img
            onClick={() => navigate(ROUTES.HOME_PATH)}
            className={`${s[`logo-${theme}`]}`}
            src={logoDark}
            alt="logo"
          />
        )}
      </div>
      <div className={s.buttonsContainer}>
        {theme === 'light' ? (
          <FaMoon className={s.themeBtn} onClick={handleChangeTheme} />
        ) : (
          <IoSunnyOutline className={s.themeBtn} onClick={handleChangeTheme} />
        )}
        <div>
          {isAuth ? (
            <>
              <button className={s.logOutBtn} onClick={handleLogOut}>
                LogOut
              </button>
              <button onClick={() => navigate(ROUTES.PROFILE)}>Profile</button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate(ROUTES.SIGN_IN)}
                className={s.signInBtn}
              >
                SignIn
              </button>
              <button
                onClick={() => navigate(ROUTES.SIGN_UP)}
                className={s.signUpBtn}
              >
                SignUp
              </button>
            </>
          )}
        </div>
        <div className={s.cart}>
          {isAuth && theme === 'light' && (
            <>
              <BsCart3 size={30} style={{ marginTop: 3, marginRight: 5 }} />
              <h2>0</h2>
            </>
          )}
          {isAuth && theme === 'dark' && (
            <>
              <FaCartShopping
                size={30}
                style={{ marginTop: 3, marginRight: 5 }}
              />
              <h2>0</h2>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
