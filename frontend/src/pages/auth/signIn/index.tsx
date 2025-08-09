import { withZodSchema } from 'formik-validator-zod';
import { useFormik } from 'formik';
import { z } from 'zod';

const signUpSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 chars'),
});

export const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: withZodSchema(signUpSchema),
    onSubmit: (values) => {
      console.log(values, 'values');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Email Address</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <div>{formik.errors.email}</div>}

      <label>Password</label>
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <div>{formik.errors.password}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};
