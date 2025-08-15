import React from 'react';
import { ConfirmPop } from '../../../shared/modal/ConfirmPop';
import { ROUTES } from '../../../routes/paths';
import s from '../index.module.scss';
import { useNavigate } from 'react-router-dom';

export const AuthButtons: React.FC<{
  isAuth: boolean;
  handleLogOut: () => void;
}> = ({ isAuth, handleLogOut }) => {
  const navigate = useNavigate();
  return (
    <>
      {isAuth ? (
        <>
          <ConfirmPop
            title="Are you sure you want to log out?"
            onConfirm={handleLogOut}
          >
            <button className={s.logOutBtn}>LogOut</button>
          </ConfirmPop>

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
    </>
  );
};
