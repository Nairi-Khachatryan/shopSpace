import { router } from './routes/product.route.ts';
import { conectDb } from './config/db.ts';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());
app.use('/products', router);



const PORT = process.env.PORT || 5051;

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  conectDb();
});
