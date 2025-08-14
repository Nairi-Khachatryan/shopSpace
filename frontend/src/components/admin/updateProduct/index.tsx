import { useLocation } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { FormInput } from '../../../shared/form';
import s from './updateProduct.module.scss';
import { useFormik } from 'formik';

export const UpdateProduct = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const { name, _id, category, description, price, image } = location.state;

  const initialValues = {
    name: name || '',
    price: price || '',
    image: image || '',
    category: category || '',
    description: description || '',
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
