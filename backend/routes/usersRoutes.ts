import express from 'express';
import { register } from '../controllers/usersController';
import { login } from '../controllers/usersController';

export const usersRouter = express.Router();
usersRouter.post('/', register);
usersRouter.post('/login', login);
