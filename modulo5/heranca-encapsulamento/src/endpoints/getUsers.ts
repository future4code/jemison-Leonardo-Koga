import { Request, Response } from "express"
import { UserDatabase } from "../database/ UserDatabase"


export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_USERS).select()
        const result = await new UserDatabase().getAllUsers();
        res.status(200).send({ users: result });
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}