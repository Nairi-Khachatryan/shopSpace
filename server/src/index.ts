import express from 'express';
import dotenv from 'dotenv';
import { conectDb } from './config/db.ts';
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  conectDb();
});
