import { Request, Response } from 'express';
import { TBoard,  } from '../models';
import { StatusCodes } from 'http-status-codes';
import { BoardModal } from '../models';
import { getErrorMessage } from '../utils';
import { CustomRequest } from '../middleware/protected';
import { createBoard } from '../services/boardService';


// GET: borads/
export const getBoards = async (req: Request, res: Response) => {
  const { user } = req as CustomRequest;
  console.log({ _id: user?._id });
  try {
    return res.status(StatusCodes.OK).json({ message: 'test boards route' });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getErrorMessage(error));
  }
};

// POST: boards/
export const addBoard = async (req: Request, res: Response) => {
  const { user }  = req as CustomRequest;

  const board:TBoard = {
    title: req.body.title,
    creater_id: user?._id,
  }
  const newBoard = createBoard(board)
  try {
    return res.status(StatusCodes.OK).json(newBoard);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getErrorMessage(error));
  }
}


// export const addBoard = asyncHandler(async (req, res) => {
//   const quiz = await Quiz.create({
//     title: req.body.title,
//     threshold: req.body.threshold,
//   });

//   res.status(200).json(quiz);
// });