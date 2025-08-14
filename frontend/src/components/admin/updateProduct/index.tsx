import { useTheme } from '../../../hooks/useTheme';
import { FormInput } from '../../../shared/form';
import s from './updateProduct.module.scss';
import { useFormik } from 'formik';

export const UpdateProduct = () => {
  const { theme } = useTheme();
  const initialValues = {
    name: '',
    price: '',
    image: '',
    category: '',
    description: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      // createProduct(values);
      resetForm();
    },
  });

  const { handleChange, values, errors, handleSubmit } = formik;

  return (
    <div className={`${s[`container-${theme}`]}`}>
      <div>
        <h1 className={s.headText}>Update Product</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          label="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormInput
          name="price"
          label="price"
          type="number"
          value={values.price}
          onChange={handleChange}
        />
        <FormInput
          name="description"
          label="description"
          onChange={handleChange}
          value={values.description}
          error={errors.description}
        />
        <FormInput
          name="category"
          label="category"
          value={values.category}
          error={errors.category}
          onChange={handleChange}
        />
        <FormInput
          name="image"
          label="imageUrl"
          value={values.image}
          error={errors.image}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Update Product</button>
        </div>
      </form>
    </div>
  );
};
