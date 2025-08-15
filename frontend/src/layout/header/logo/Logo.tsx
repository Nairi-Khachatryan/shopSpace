import logoLight from '../../../assets/logo-light.png';
import logoDark from '../../../assets/logo-dark.png';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/paths';
import s from '../index.module.scss';
import React from 'react';

const Logo: React.FC<{ theme: string }> = ({ theme }) => {
  const navigate = useNavigate();
  console.log(theme, 'theme');

  return (
    <>
      {theme === 'light' ? (
        <img
          onClick={() => navigate(ROUTES.HOME_PATH)}
          className={`${s[`logo-${theme}`]}`}
          src={logoLight}
          alt="logo"
        />
      ) : (
        <img
          onClick={() => navigate(ROUTES.HOME_PATH)}
          className={`${s[`logo-${theme}`]}`}
          src={logoDark}
          alt="logo"
        />
      )}
    </>
  );
};

export default Logo;
