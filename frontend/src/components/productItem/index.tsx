import { deleteProduct } from '../../features/products/productThunk';
import type { Product } from '../../pages/home/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import React from 'react';

type Props = {
  product: Product;
  isAdmin: boolean;
};

export const ProductItem: React.FC<Props> = ({ product, isAdmin }: Props) => {
  const navigate = useNavigate();

  function handleDeleteProduct(id: string) {
    deleteProduct(id);
  }

  const { name, price, description, category, _id, image } = product;

  return (
    <div
      key={_id}
      style={{
        border: '1px solid #ccc',
        padding: 10,
        marginBottom: 10,
      }}
    >
      <h3>
        {name} — {price}$
      </h3>
      <p>{description}</p>
      <p>Category: {category}</p>
      {image && <img src={image} alt={name} style={{ maxWidth: 150 }} />}
      {isAdmin && (
        <>
          <button onClick={() => handleDeleteProduct(_id)}>Delete</button>
          <button
            onClick={() =>
              navigate(ROUTES.ADMIN_UPDATES, {
                state: { name, _id, description, category, image, price },
              })
            }
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};
