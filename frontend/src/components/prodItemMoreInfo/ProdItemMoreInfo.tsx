import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  image?: string; 
}

export const ProdItemMoreInfo: React.FC = () => {
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (location.state) {
      setProduct(location.state as Product);
    }
  }, [location.state]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', borderRadius: 8, marginBottom: 20 }}
        />
      )}

      <h1>{product.name}</h1>
      <h3 style={{ color: 'gray' }}>{product.category}</h3>
      <p>{product.description}</p>

      <div style={{ fontSize: 20, fontWeight: 'bold', margin: '20px 0' }}>
        {product.price} ₽
      </div>

      <button
        style={{
          padding: '10px 20px',
          fontSize: 16,
          background: 'black',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
        }}
      >
        Добавить в корзину
      </button>
    </div>
  );
};
