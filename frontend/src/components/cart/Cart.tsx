import { useAppDispatch, useAppSelector } from '../../app/hooks';
import type { Product } from '../../pages/home/types';
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from '../../features/cart/cartSlice';
import s from './cart.module.scss';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);

  function handleIncreaseCard(product: Product) {
    dispatch(addToCart(product));
  }
  function handleDecreaseCard(id: string) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className={s.cart}>
      {items.length ? (
        items.map((product) => (
          <div key={product._id} className={s.item}>
            <img src={product.image} alt={product.name} className={s.image} />
            <div className={s.info}>
              <div className={s.name}>{product.name}</div>
              <div className={s.price}>${product.price}</div>
              <div className={s.qty}>
                <button onClick={() => handleDecreaseCard(product._id)}>
                  -
                </button>
                <span>{product.qty}</span>
                <button onClick={() => handleIncreaseCard(product)}>+</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={s.empty}>Корзина пуста</div>
      )}
    </div>
  );
};
