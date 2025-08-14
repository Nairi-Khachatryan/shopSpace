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
          <button>Delete</button>
          <button onClick={() => navigate(ROUTES.ADMIN_UPDATES)}>Update</button>
        </>
      )}
    </div>
  );
};
