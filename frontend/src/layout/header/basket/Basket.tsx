import { FaCartShopping } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import React from 'react';

export const Basket: React.FC<{ theme: string; isAuth: boolean }> = ({
  theme,
  isAuth,
}) => {
  console.log(isAuth, 'isAuth');
  return (
    <>
      {isAuth && theme === 'light' && (
        <>
          <FaCartShopping size={30} style={{ marginTop: 3, marginRight: 5 }} />
          <h2>0</h2>
        </>
      )}
      {isAuth && theme === 'dark' && (
        <>
          <BsCart3 size={30} style={{ marginTop: 3, marginRight: 5 }} />
          <h2 style={{ fontSize: 3, color: 'wheat' }}>0</h2>
        </>
      )}
    </>
  );
};
