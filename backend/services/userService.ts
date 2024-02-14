import { UserModal, TUser } from "../models";

export async function registerUser (user: TUser): Promise<null | TUser> {
   const newUser =  await UserModal.create(user);
   return newUser ? newUser : null 
}

export async function findUserByUsername(username: string): Promise<null | TUser> {
    const userExists =  await UserModal.findOne({username});
    return userExists? userExists: null
}