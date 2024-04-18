import express from 'express'
import { getBoards, addBoard } from '../controllers/boardsController';
import { protect } from '../middleware/protected';


export const boardsRouter = express.Router();
boardsRouter.get('/',  protect, getBoards)
boardsRouter.post('/', protect, addBoard)

