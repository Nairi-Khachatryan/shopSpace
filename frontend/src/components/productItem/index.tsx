import { deleteProduct } from '../../features/products/productThunk';
import type { Product } from '../../pages/home/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import React from 'react';

type Props = {
  product: Product;
  isAdmin: boolean;
};

import s from './productItem.module.scss';

export const ProductItem: React.FC<Props> = ({ product, isAdmin }) => {
  const navigate = useNavigate();

  function handleDeleteProduct(id: string) {
    deleteProduct(id);
  }
  const { _id, name, price, description, category, image } = product;

  return (
    <article className={s.card}>
      <h3 className={s.title}>
        {name} — <span className={s.price}>{price}$</span>
      </h3>

      {image && (
        <div className={s.media}>
          <img src={image} alt={name} />
        </div>
      )}

      <p className={s.desc}>{description}</p>
      <p className={s.meta}>Category: {category}</p>

      {!isAdmin ? (
        <>
          <button className={s.addCard}>Add To Card</button>
        </>
      ) : (
        <div className={s.actions}>
          <button
            className={`${s.btn} ${s.deleteBtn}`}
            onClick={() => handleDeleteProduct(_id)}
          >
            Delete
          </button>
          <button
            className={`${s.btn} ${s.updateBtn}`}
            onClick={() =>
              navigate(ROUTES.ADMIN_UPDATES, {
                state: { name, _id, description, category, image, price },
              })
            }
          >
            Update
          </button>
        </div>
      )}
    </article>
  );
};
