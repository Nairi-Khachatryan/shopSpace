import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { signInUser } from '../../../features/user/usersThunk';
import { withZodSchema } from 'formik-validator-zod';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '../../../shared/form';
import { ROUTES } from '../../../routes/paths';
import { initialValues } from './validation';
import { signInSchema } from './validation';
import { useFormik } from 'formik';
import s from './index.module.scss';
import { useEffect } from 'react';

export const SignIn = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.HOME_PATH);
    }
  }, [navigate, isAuth]);

  const formik = useFormik({
    initialValues: initialValues,
    validate: withZodSchema(signInSchema),
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(signInUser({ email, password }));
    },
  });

  const { handleChange, values, errors } = formik;

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <FormInput
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
        error={errors.email}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={values.password}
        error={errors.password}
      />

      <div className={s.linkNavigate}>
        <h1> Already have an account?</h1>
        <Link className={s.myLink} to={ROUTES.SIGN_UP}>
          Sign In
        </Link>
      </div>
      <button className={s.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};
