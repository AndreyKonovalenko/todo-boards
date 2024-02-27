import express, { Request, Response } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { connectDB } from './db';
import { usersRouter } from './routes/usersRoutes';
import { boardsRouter } from './routes/boardsRoutes';

const terminalColors = colors;

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/app/users', usersRouter);
app.use('/app/boards', boardsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`.yellow);
});
