import { Types } from 'mongoose';
import { UserModal, IUser } from '../models';
import { Response } from 'express';
import jwt from 'jsonwebtoken';

export async function registerUser(user: IUser): Promise<null | IUser> {
  console.log(user);
  const newUser: any = await UserModal.create(user);
  console.log(newUser);
  return newUser ? newUser : null;
}

export async function findUserByUsername(
  username: string
): Promise<null | IUser> {
  const userExists = await UserModal.findOne({ username });
  return userExists ? userExists : null;
}

export function generateToken(
  res: Response,
  user_id: Types.ObjectId | undefined | null
): void {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: parseInt(process.env.TOKEN_EXPIRES_IN!),
  });
}
