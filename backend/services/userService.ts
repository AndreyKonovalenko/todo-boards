import { UserModal, TUser } from "../models";

export async function registerUser (user: TUser){
    try {
        await UserModal.create(user);
    } catch (error){
        throw (error)
    }
}

export async function findUserByUsername(user: TUser) {
    const {username} = user;
    try {
       return await UserModal.findOne({username});
    } catch (error) {
        throw (error)
    } 
}