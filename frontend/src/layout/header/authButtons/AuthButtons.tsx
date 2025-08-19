import { logOutUser } from '../../../features/user/userSlice';
import { ConfirmPop } from '../../../shared/modal/ConfirmPop';
import { useAppDispatch } from '../../../app/hooks';
import { ROUTES } from '../../../routes/paths';
import { useNavigate } from 'react-router-dom';
import s from '../index.module.scss';
import React from 'react';

export const AuthButtons: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return isAuth ? (
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
      <button onClick={() => navigate(ROUTES.SIGN_IN)} className={s.signInBtn}>
        SignIn
      </button>
      <button onClick={() => navigate(ROUTES.SIGN_UP)} className={s.signUpBtn}>
        SignUp
      </button>
    </>
  );
};
