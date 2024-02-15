import {Types} from "mongoose";
import { UserModal, TUser } from "../models";
import jwt from 'jsonwebtoken'


export async function registerUser (user: TUser): Promise<null | TUser> {
   const newUser =  await UserModal.create(user);
   return newUser ? newUser : null 
}

export async function findUserByUsername(username: string): Promise<null | TUser> {
    const userExists =  await UserModal.findOne({username});
    return userExists? userExists: null
}

export function generateToken(user_id: Types.ObjectId | undefined | null ): string {
    return jwt.sign({ user_id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    });
  };