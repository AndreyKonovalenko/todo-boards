import { Request, Response } from 'express';
import { TBoard,  } from '../models';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { BoardModal } from '../models';
import { getErrorMessage } from '../utils';
import { CustomRequest } from '../middleware/protected';
import { createBoard, findBoardsByCreaterId } from '../services/boardService';


// GET: borads/
export const getBoards = async (req: Request, res: Response) => {
  const { user } = req as CustomRequest;
  console.log({ _id: user?._id });
 try {
    const boards = await findBoardsByCreaterId(user?._id)
    return res.status(StatusCodes.OK).json(boards); 
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getErrorMessage(error));
  }
};

// POST: boards/
export const addBoard = async (req: Request, res: Response) => {
  const { user }  = req as CustomRequest;
  const board: TBoard = {
    title: req.body.title,
    creater_id: user?._id,
  }
  try {
    const newBoard = await createBoard(board)
    return res.status(StatusCodes.OK).json(newBoard);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getErrorMessage(error));
  }
}

