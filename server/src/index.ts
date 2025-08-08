import { Product } from './models/product.model.ts';
import { conectDb } from './config/db.ts';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5051;

app.use(express.json());

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  }
});

app.get('/products/:id', async (req, res) => {
  const PRODUCT_ID = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(PRODUCT_ID)) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(PRODUCT_ID);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  }
});

app.post('/products/', async (req, res) => {
  const { image, name, description, price, category } = req.body;

  if (!image || !name || !description || !price || !category) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' });
  }

  const newProduct = new Product(req.body);

  try {
    newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in create product', error.message);
      res.status(500).json({ success: false, message: 'Server Error' });
    }

    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.put('/products/:id', async (req, res) => {
  const PRODUCT_ID = req.params.id;
  const newProduct = req.body;

  if (!mongoose.Types.ObjectId.isValid(PRODUCT_ID)) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid product ID' });
  }

  if (
    !newProduct.name ||
    !newProduct.price ||
    !newProduct.description ||
    !newProduct.category ||
    !newProduct.image
  ) {
    return res
      .status(404)
      .json({ success: false, message: 'Please provide all fields' });
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
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  }
});

app.delete('/products/:id', async (req, res) => {
  const PRODUCT_ID = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(PRODUCT_ID)) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid product ID' });
  }

  try {
    await Product.findByIdAndDelete(PRODUCT_ID);
    return res
      .status(200)
      .json({ success: true, message: 'Product deleted successfuly' });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  conectDb();
});
