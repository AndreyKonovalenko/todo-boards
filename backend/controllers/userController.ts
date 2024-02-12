import { Request, Response } from "express";
import { getErrorMessage } from "../utils";
import { registerUser, findUserByUsername } from "../services/userService";

export const register = async( req: Request, res: Response) => {
    let userExists;
    try {
        userExists = await findUserByUsername(req.body)
    } catch(error) {
        res.status(500).send(getErrorMessage(error))
    }

    if (userExists){
        res.status(400)
        throw Error('User already exists')
    }

    try {
        await registerUser(req.body);
        res.status(200).send('User registration succeeded')
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }

} 