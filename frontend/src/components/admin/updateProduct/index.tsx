import { updateProduct } from '../../../features/products/productThunk';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { FormInput } from '../../../shared/form';
import { ROUTES } from '../../../routes/paths';
import s from './updateProduct.module.scss';
import { useFormik } from 'formik';
import lodash from 'lodash';

export const UpdateProduct = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

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
      const isSameValue = lodash.isEqual(values, initialValues);

      if (isSameValue) {
        return;
      }

      updateProduct(_id, values);
      resetForm();
      navigate(ROUTES.HOME_PATH, { state: { message: 'redirect' } });
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
