import { withZodSchema } from 'formik-validator-zod';
import { useFormik } from 'formik';
import { z } from 'zod';
import s from './signUp.module.scss';
import { useState } from 'react';

const signUpSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Min 6 chars'),
    copyPassword: z.string(),
  })
  .refine((data) => data.password === data.copyPassword, {
    message: "Passwords don't match",
    path: ['copyPassword'],
  });

export const SignUp = () => {
  const [signUpStatus, setSignUpStatus] = useState({});

  async function register(values) {
    const { email, password } = values;

    try {
      const res = await fetch('http://localhost:5050/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      setSignUpStatus(res);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  console.log(signUpStatus, 'signUpStatus');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      copyPassword: '',
    },
    validate: withZodSchema(signUpSchema),
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <label>Email Address</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && (
        <div className={s.errorText}>{formik.errors.email}</div>
      )}

      <label>Password</label>
      <input
        placeholder="At least 6 characters"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && (
        <div className={s.errorText}>{formik.errors.password}</div>
      )}
      <label>Re-enter password</label>
      <input
        placeholder="At least 6 characters"
        name="copyPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.copyPassword}
      />
      {formik.errors.copyPassword && (
        <div className={s.errorText}>{formik.errors.copyPassword}</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
