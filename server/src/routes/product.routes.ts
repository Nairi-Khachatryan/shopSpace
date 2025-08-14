import {
  createProducts,
  deleteProducts,
  updateProducts,
  getAllProducts,
  getSingleProducts,
} from '../controllers/product.controllers.ts';
import express from 'express';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getSingleProducts);

productRouter.post('/admin', createProducts);
productRouter.put('/:id', updateProducts);

productRouter.delete('/:id', deleteProducts);
