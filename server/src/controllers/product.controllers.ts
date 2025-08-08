import { Product } from '../models/product.model.ts';
import { successRes } from '../utils/successRes.ts';
import type { Request, Response } from 'express';
import { errorRes } from '../utils/errorRes.ts';
import mongoose from 'mongoose';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json(errorRes(false, 'Server Error'));
    }
  }
};

export const getSingleProducts = async (req: Request, res: Response) => {
  const PRODUCT_ID = req.params.id;

  if (!PRODUCT_ID || !mongoose.Types.ObjectId.isValid(PRODUCT_ID)) {
    return res.status(404).json(errorRes(false, 'Invalid product ID'));
  }

  try {
    const product = await Product.findById(PRODUCT_ID);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json(errorRes(false, 'Server Error'));
    }
  }
};

export const createProducts = async (req: Request, res: Response) => {
  const { image, name, description, price, category } = req.body;

  if (!image || !name || !description || !price || !category) {
    return res.status(400).json(errorRes(false, 'Please provide all fields'));
  }

  const newProduct = new Product(req.body);

  try {
    newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in create product', error.message);
      res.status(500).json(errorRes(false, 'Server Error'));
    }

    res.status(500).json(errorRes(false, 'Server Error'));
  }
};

export const updateProducts = async (req: Request, res: Response) => {
  const PRODUCT_ID = req.params.id;
  const newProduct = req.body;

  if (!PRODUCT_ID || !mongoose.Types.ObjectId.isValid(PRODUCT_ID)) {
    return res.status(404).json(errorRes(false, 'Invalid product ID'));
  }

  if (
    !newProduct.name ||
    !newProduct.price ||
    !newProduct.description ||
    !newProduct.category ||
    !newProduct.image
  ) {
    return res.status(404).json(errorRes(false, 'Please provide all fields'));
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      PRODUCT_ID,
      newProduct,
      {
        new: true,
      }
    );

    return res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json(errorRes(false, 'Server Error'));
    }
  }
};

export const deleteProducts = async (req: Request, res: Response) => {
  const { id: PRODUCT_ID } = req.params;

  if (!PRODUCT_ID || !mongoose.Types.ObjectId.isValid(PRODUCT_ID)) {
    return res.status(400).json(errorRes(false, 'Invalid product ID'));
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(PRODUCT_ID);

    if (!deletedProduct) {
      return res.status(404).json(errorRes(false, 'Product not found'));
    }

    return res
      .status(200)
      .json(successRes(true, 'Product deleted successfully'));
  } catch (error) {
    console.error(error);
    return res.status(500).json(errorRes(false, 'Server Error'));
  }
};
