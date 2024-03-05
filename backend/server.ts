import express, { Request, Response } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { connectDB } from './db';
import { usersRouter } from './routes/usersRoutes';
import cookieParser from "cookie-parser";
import { boardsRouter } from './routes/boardsRoutes';
import cors from 'cors'

const terminalColors = colors;

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL
        : `http://localhost:${port}`,
  })
);

app.use('/app/users', usersRouter);
app.use('/app/boards', boardsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`.yellow);
});
