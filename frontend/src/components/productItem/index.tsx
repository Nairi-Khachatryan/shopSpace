import { deleteProduct } from '../../features/products/productThunk';
import { storageService } from '../../utils/storageService';
import { ConfirmPop } from '../../shared/modal/ConfirmPop';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { useAuth } from '../../hooks/useAuth';
import s from './productItem.module.scss';
import type { Props } from './types';
import React from 'react';

export const ProductItem: React.FC<Props> = ({ product, isAdmin }) => {
  const navigate = useNavigate();
  const isAuth = useAuth();

  type Product = {
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    _id: string;
    qty: number;
  };

  function handleAddToBasket(product: Product) {
    if (!isAuth) {
      storageService.setItem(product);
    }
  }

  function handleDeleteProduct(id: string) {
    deleteProduct(id);
  }
  const { _id, name, price, description, category, image } = product;

  const handleProductPrevue = () => {
    navigate(ROUTES.PRODUCT_ITEM_PREVUE, {
      state: { _id, name, price, description, category, image },
    });
  };

  return (
    <article className={s.card}>
      <div onClick={handleProductPrevue}>
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
      </div>
      {!isAdmin ? (
        <>
          <button
            onClick={() => handleAddToBasket(product)}
            className={s.addCard}
          >
            Add To Card
          </button>
        </>
      ) : (
        <div className={s.actions}>
          <ConfirmPop
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDeleteProduct(_id)}
          >
            <button className={`${s.btn} ${s.deleteBtn}`}>Delete</button>
          </ConfirmPop>
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
