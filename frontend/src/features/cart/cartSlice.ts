import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty: number;
};

type CartState = {
  items: Product[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existing = state.items.find((item) => item._id === action.payload);

      if (!existing) return;

      if (existing.qty > 1) {
        existing.qty -= 1;
      } else {
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((acc, item) => acc + item.qty, 0);

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;
