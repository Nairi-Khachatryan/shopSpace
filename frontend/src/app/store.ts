import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart'],
};

const rootReducer = {
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
