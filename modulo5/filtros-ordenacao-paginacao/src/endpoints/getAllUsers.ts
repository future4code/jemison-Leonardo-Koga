import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getAllUsers(
    req: Request,
    res: Response
    ): Promise<void> {
    try {
       const users = await connection ("aula48_exercicio")
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.status(500).send("Internal server error")
    }
 }