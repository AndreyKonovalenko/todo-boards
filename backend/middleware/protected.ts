import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { getErrorMessage } from '../utils';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //        need to get token from cookie not from header
    const token = req.header('Authorization')?.replace('Bereor ', '');
    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(ReasonPhrases.UNAUTHORIZED);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(decoded);
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).send(getErrorMessage(error));
  }
};
