import { createSlice } from '@reduxjs/toolkit';

interface Product {
  name: string | null;
  price: number | null;
  image: string | null;
  description: string | null;
  category: string | null;
}

const initialState: Product[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: () => {},
    removeProduct: () => {},
  },
});

export const { removeProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
