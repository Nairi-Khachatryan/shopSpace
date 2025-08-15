import { updateProduct } from '../../../features/products/productThunk';
import { useLocation, useNavigate } from 'react-router-dom';
import { withZodSchema } from 'formik-validator-zod';
import { useTheme } from '../../../hooks/useTheme';
import { useToast } from '../../../hooks/useToast';
import { FormInput } from '../../../shared/form';
import { ROUTES } from '../../../routes/paths';
import { productSchema } from './inputSchema';
import s from './updateProduct.module.scss';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import lodash from 'lodash';

export const UpdateProduct: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    if (!location.state) {
      navigate(ROUTES.HOME_PATH);
    }
  }, [location.state, navigate]);

  const formik = useFormik({
    initialValues: {
      name: location.state?.name || '',
      price: location.state?.price || '',
      image: location.state?.image || '',
      category: location.state?.category || '',
      description: location.state?.description || '',
    },
    enableReinitialize: true,
    validate: withZodSchema(productSchema),
    onSubmit: async (values, { resetForm }) => {
      const isSameValue = lodash.isEqual(values, formik.initialValues);
      if (isSameValue) {
        return showToast({ message: 'Nothing to update', type: 'warning' });
      }

      const res = await updateProduct(location.state._id, values);

      if (!res.success) {
        return showToast({ message: res.message, type: 'error' });
      }

      resetForm();
      showToast({ type: 'success', message: 'Product Updated Successfuly' });
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
          onChange={handleChange}
          error={typeof errors.name === 'string' ? errors.name : undefined}
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
          error={
            typeof errors.description === 'string'
              ? errors.description
              : undefined
          }
        />
        <FormInput
          name="category"
          label="category"
          value={values.category}
          error={
            typeof errors.category === 'string' ? errors.category : undefined
          }
          onChange={handleChange}
        />
        <FormInput
          name="image"
          label="imageUrl"
          value={values.image}
          error={typeof errors.image === 'string' ? errors.image : undefined}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Update Product</button>
        </div>
      </form>
    </div>
  );
};
