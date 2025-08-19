import { storageService } from '../../utils/storageService';

export const Cart = () => {
  const data = storageService.getItem();

  type Product = {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    _id: string;
    qty: string;
  };

  return (
    <div>
      {data?.length
        ? data.map((product: Product) => (
            <div key={product._id}>
              <div>name: {product.name}</div>
              <div> Price: {product.price}</div>
              <div>Qty: {product.qty}</div>
            </div>
          ))
        : 'loading'}
    </div>
  );
};
