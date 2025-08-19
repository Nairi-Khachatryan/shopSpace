import { FaCartShopping } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import s from './basket.module.scss';
import React from 'react';

export const Basket: React.FC<{ theme: string }> = ({
  theme,
}) => {
  return (
    <>
      {theme === 'light' && (
        <div className={s.basketBox}>
          <FaCartShopping size={30} style={{ marginTop: 3, marginRight: 5 }} />
          <h2>0</h2>
        </div>
      )}
      {theme === 'dark' && (
        <div className={s.basketBox}>
          <BsCart3 size={30} style={{ marginTop: 3, marginRight: 5 }} />
          <h2>0</h2>
        </div>
      )}
    </>
  );
};
