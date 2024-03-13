import express from 'express';
import { register, login, logout } from '../controllers/authController';

export const authRouter = express.Router();
authRouter.post('/', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
