import {
  createProducts,
  deleteProducts,
  updateProducts,
  getAllProducts,
  getSingleProducts,
} from '../controllers/product.controllers.ts';
import express from 'express';

export const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProducts);

router.post('/', createProducts);
router.put('/:id', updateProducts);

router.delete('/:id', deleteProducts);
