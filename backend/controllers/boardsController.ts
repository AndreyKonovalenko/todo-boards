import { Request, Response } from 'express';
import { TBoard } from '../models';
import { StatusCodes } from 'http-status-codes';
import { getErrorMessage } from '../utils';

import { CustomRequest } from '../middleware/protected';

// GET: borads/
export const getBoards = async (req: Request, res: Response) => {
  console.log('get boards')
      try {
          return  res.status(StatusCodes.OK).json({message: "test boards route" })
      } catch(error){
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getErrorMessage(error))
      }
};
