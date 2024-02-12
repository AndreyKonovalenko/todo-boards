import express, { Request, Response } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { connectDB } from './db';
import { userRouter } from './routes/userRoutes';

const terminalColors = colors;

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/app/users', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`.yellow);
});
