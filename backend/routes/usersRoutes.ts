import express from 'express';
import { register, login, logout } from '../controllers/usersController';

export const usersRouter = express.Router();
usersRouter.post('/', register);
usersRouter.post('/login', login);
usersRouter.post('/logout', logout);
