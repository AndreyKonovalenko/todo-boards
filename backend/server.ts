import express, { Request, Response } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { connectDB } from './db';

const terminalColors = colors;

dotenv.config();
connectDB();

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`.yellow);
});
