import { getAllProducts } from '../../features/products/productThunk';
import { ProductItem } from '../../components/productItem';
import { useIsAdmin } from '../../hooks/useIsAdmin';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from '../../hooks/useTheme';
import type { Product } from './interfaces';
import s from './index.module.scss';
import React from 'react';

export const Home: React.FC = () => {
  const isAdmin = useIsAdmin();

  const { theme } = useTheme();
  const { data, error, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  console.log(error, 'error');
  console.log(isSuccess, 'isSuc');

  return (
    <div className={theme === 'light' ? s.homeLight : s.homeDark}>
      <div className={s.productsGrid}>
        {data?.length ? (
          data.map((product: Product) => (
            <ProductItem
              isAdmin={isAdmin}
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};
