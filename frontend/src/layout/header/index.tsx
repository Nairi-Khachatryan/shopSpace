import { logOutUser } from '../../features/user/userSlice';
import { AuthButtons } from './authButtons/AuthButtons';
import { Cart } from '../../components/cart/Cart';
import { IoSunnyOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../app/hooks';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';
import { Basket } from './basket/Basket';
import { FaMoon } from 'react-icons/fa';
import s from './index.module.scss';
import { useState } from 'react';
import Logo from './logo/Logo';
import { Modal } from 'antd';

export const Header = () => {
  const { theme, handleChangeTheme } = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  const showCart = () => setIsModalOpen(true);
  const closeCart = () => setIsModalOpen(false);

  return (
    <>
      <header className={`${s[`header-${theme}`]}`}>
        <div className={s.logoBlock}>
          <Logo theme={theme} />
        </div>
        <div className={s.buttonsContainer}>
          {theme === 'light' ? (
            <FaMoon className={s.themeBtn} onClick={handleChangeTheme} />
          ) : (
            <IoSunnyOutline
              className={s.themeBtn}
              onClick={handleChangeTheme}
            />
          )}
          <div>
            <AuthButtons isAuth={!!isAuth} handleLogOut={handleLogOut} />
          </div>
          <div
            className={s.cart}
            onClick={showCart}
            style={{ cursor: 'pointer' }}
          >
            <Basket theme={theme} isAuth={!!isAuth} />
          </div>
        </div>
      </header>
      <Modal
        title="Cart"
        open={isModalOpen}
        onCancel={closeCart}
        footer={null}
        width="80%"
        styles={{
          body: { height: '700px', overflowY: 'auto' },
        }}
      >
        <Cart />
      </Modal>
    </>
  );
};
