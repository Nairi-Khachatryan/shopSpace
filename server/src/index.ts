import { router } from './routes/product.routes.ts';
import { conectDb } from './config/db.ts';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.ts';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/products', router);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5051;

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  conectDb();
});
