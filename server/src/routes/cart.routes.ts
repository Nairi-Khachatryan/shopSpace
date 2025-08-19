import express from 'express';
import { getAllCartProducts } from '../controllers/cart.controllers.ts';

export const cartRouter = express.Router();

cartRouter.get('/', getAllCartProducts);
cartRouter.post('/cart', getAllCartProducts);
cartRouter.delete('/:id', getAllCartProducts);
