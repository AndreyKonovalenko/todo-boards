import express from 'express'
import { getBoards } from '../controllers/boardsController';
import { protect } from '../middleware/protected';


export const boardsRouter = express.Router();
boardsRouter.get('/', protect, getBoards)

