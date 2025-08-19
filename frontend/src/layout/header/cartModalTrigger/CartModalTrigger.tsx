import { Cart } from '../../../components/cart/Cart';
import { Basket } from '../basket/Basket';
import { useState } from 'react';
import { Modal } from 'antd';

export const CartModalTrigger = ({ theme }: { theme: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cart" onClick={() => setOpen(true)}>
        <Basket theme={theme} />
      </div>
      <Modal
        title="Cart"
        open={open}
        onCancel={() => setOpen(false)}
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
