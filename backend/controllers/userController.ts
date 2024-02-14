import { Request, Response } from "express";
import { getErrorMessage } from "../utils";
import { registerUser, findUserByUsername } from "../services/userService";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const register = async(req: Request, res: Response) => {
    try {
        const {username} = req.body;
        const userExists = await findUserByUsername(username);
        if(userExists) {
            return res.status(StatusCodes.BAD_REQUEST).send(`${ReasonPhrases.BAD_REQUEST}: username: ${username} already exists`)
        }
        const user = await registerUser(req.body)
        if (user) {
           return res.status(StatusCodes.OK).send(`${ReasonPhrases.OK} ${user}`)
        }
    } catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getErrorMessage(error))
    }   
} 

export const login = async(req: Request, res: Response) => {


}