import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { getErrorMessage } from "../utils";
import { registerUser, findUserByUsername } from "../services/usersService";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { generateToken } from "../services/usersService";


// POST: users/
export const register = async(req: Request, res: Response) => {
    try {
        const {username} = req.body;
        const userExists = await findUserByUsername(username);
        if(userExists) {
            return res.status(StatusCodes.BAD_REQUEST).send(`${ReasonPhrases.BAD_REQUEST}: username: ${username} already exists`)
        }
        const user = await registerUser(req.body)
        if (user) {
           return res.status(StatusCodes.OK).send("Successfuly Registered!")
        } 
    } catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getErrorMessage(error))
    }   
} 

// POST: users/login
export const login = async(req: Request, res: Response) => {
    const{ username, password} = req.body;
    try {
         const user =  await findUserByUsername(username);
         if (!user) {
            return res.status(StatusCodes.BAD_REQUEST).send(`${ReasonPhrases.BAD_REQUEST}: User ${username} not found.`)
         }         
         if (user && bcrypt.compareSync(password, user.password)){
            return  res.status(StatusCodes.OK).json({id: user._id , username: user.username, token: generateToken(user._id) })
         } else {
            return res.status(StatusCodes.BAD_REQUEST).send(`${ReasonPhrases.BAD_REQUEST}: Password is not correct`)
         }
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getErrorMessage(error))
    }
    



}