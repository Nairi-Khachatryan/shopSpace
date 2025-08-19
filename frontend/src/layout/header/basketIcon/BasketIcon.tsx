import { selectCartCount } from '../../../features/cart/cartSlice';
import { useAppSelector } from '../../../app/hooks';
import { FaCartShopping } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import s from './basket.module.scss';
import React from 'react';

export const BasketIcon: React.FC<{ theme: string }> = ({ theme }) => {
  const count = useAppSelector(selectCartCount);


  return (
    <>
      <div className={s.basketBox}>
        {theme === 'light' ? (
          <FaCartShopping size={30} style={{ marginTop: 3, marginRight: 5 }} />
        ) : (
          <BsCart3 size={30} style={{ marginTop: 3, marginRight: 5 }} />
        )}
        <h2>{count}</h2>
      </div>
    </>
  );
};
