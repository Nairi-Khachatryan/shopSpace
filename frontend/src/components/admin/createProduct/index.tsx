import { createProduct } from '../../../features/products/productThunk';
import { useToast } from '../../../hooks/useToast';
import { useTheme } from '../../../hooks/useTheme';
import { FormInput } from '../../../shared/form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/paths';
import s from './createProduct.module.scss';
import { useFormik } from 'formik';

export const CreateProduct = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { showToast } = useToast();
  const initialValues = {
    name: '',
    price: '',
    image: '',
    category: '',
    description: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createProduct(values);
        showToast({ type: 'success', message: 'product created successfully' });
        resetForm();
        navigate(ROUTES.HOME_PATH);
      } catch (error) {
        if (error instanceof Error) {
          showToast({ type: 'error', message: error.message });
        }
      }
    },
  });

  const { handleChange, values, errors, handleSubmit } = formik;

  return (
    <div className={`${s[`container-${theme}`]}`}>
      <div>
        <h1 className={s.headText}>Create Product</h1>
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
          <button type="submit">Create Product</button>
        </div>
      </form>
      <div>
        <button onClick={() => navigate(ROUTES.ADMIN_UPDATES)}>
          Go To Edit Products
        </button>
      </div>
    </div>
  );
};
