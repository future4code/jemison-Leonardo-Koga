import { users } from './../database/data';
import { Request, Response } from "express";
import { UserDatabase } from "../database/ UserDatabase";

export const getUserById = async (req:Request, res:Response)=> {
    let errorCode = 400
    try{
        const id = req.params.id;

        const result = await new UserDatabase().getUserById(id);
        res.status(200).send({ users: result})
    }catch{
        res.status(errorCode).send()
    }
}