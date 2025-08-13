import { registerUser } from '../../../features/user/usersThunk';
import { initialValues, signUpSchema } from './validation';
import { withZodSchema } from 'formik-validator-zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { useTheme } from '../../../hooks/useTheme';
import { FormInput } from '../../../shared/form';
import { useAuth } from '../../../hooks/useAuth';
import { ROUTES } from '../../../routes/paths';
import s from './signUp.module.scss';
import { useFormik } from 'formik';
import { useEffect } from 'react';

export const SignUp = () => {
  const isAuth = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const formik = useFormik({
    initialValues: initialValues,
    validate: withZodSchema(signUpSchema),

    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(registerUser({ email, password }));
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <>
      <form className={`${s[`form-${theme}`]}`} onSubmit={handleSubmit}>
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          label="Re-enter password"
          name="copyPassword"
          type="password"
          value={values.copyPassword}
          onChange={handleChange}
          error={errors.copyPassword}
        />
        <div className={s.linkNavigate}>
          <h1> Already have an account?</h1>
          <Link className={s.myLink} to={ROUTES.SIGN_IN}>
            Sign In
          </Link>
        </div>
        <button type="submit" className={s.submitBtn}>
          Sign Up
        </button>
      </form>
    </>
  );
};
