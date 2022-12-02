import { connection } from './../data/connection';
import { Request, Response } from "express"
import selectUsersByName from "../app"


export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
	try {
	   let name = req.query.name as string
	   
	   const result = await connection("aula48_exercicio")
	   .where("name","like", `%${name}`)
 
	   res.status(200).send(result)
	   
	} catch (error) {
	   console.log(error)
	   res.status(500).send("Internal server error")
	}

 }
