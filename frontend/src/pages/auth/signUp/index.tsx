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
import { useToast } from '../../../hooks/useToast';

export const SignUp = () => {
  const isAuth = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const formik = useFormik({
    initialValues: initialValues,
    validate: withZodSchema(signUpSchema),

    onSubmit: async (values) => {
      const { email, password } = values;
      const res = await dispatch(registerUser({ email, password })).unwrap();

      if (!res.success) {
        return showToast({ type: 'error', message: res.message });
      }

      showToast({ type: 'success', message: res.message });
      navigate(ROUTES.HOME_PATH);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <>
      <form className={`${s[`form-${theme}`]}`} onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          error={errors.email}
          value={values.email}
          label="Email Address"
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          type="password"
          name="copyPassword"
          onChange={handleChange}
          label="Re-enter password"
          value={values.copyPassword}
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
