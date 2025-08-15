import { signInUser } from '../../../features/user/usersThunk';
import { useAppDispatch } from '../../../app/hooks';
import { withZodSchema } from 'formik-validator-zod';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { useToast } from '../../../hooks/useToast';
import { useAuth } from '../../../hooks/useAuth';
import { FormInput } from '../../../shared/form';
import { ROUTES } from '../../../routes/paths';
import { initialValues } from './validation';
import { signInSchema } from './validation';
import { useFormik } from 'formik';
import s from './index.module.scss';
import { useEffect } from 'react';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAuth();
  const { theme } = useTheme();
  const { showToast } = useToast();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.HOME_PATH);
    }
  }, [navigate, isAuth]);

  const formik = useFormik({
    initialValues: initialValues,
    validate: withZodSchema(signInSchema),
    onSubmit: async (values) => {
      const { email, password } = values;
      const res = await dispatch(signInUser({ email, password })).unwrap();

      if (!res.success) {
        return showToast({ type: 'error', message: res.message });
      }

      showToast({ type: 'success', message: res.message });
      navigate(ROUTES.HOME_PATH);
    },
  });

  const { handleChange, values, errors } = formik;

  return (
    <form className={`${s[`form-${theme}`]}`} onSubmit={formik.handleSubmit}>
      <FormInput
        name="email"
        type="email"
        label="Email"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        value={values.password}
        error={errors.password}
        onChange={formik.handleChange}
      />

      <div className={s.linkNavigate}>
        <h1>New to Shop Space?</h1>
        <Link className={s.myLink} to={ROUTES.SIGN_UP}>
          Sign Up
        </Link>
      </div>
      <button className={s.submitBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};
