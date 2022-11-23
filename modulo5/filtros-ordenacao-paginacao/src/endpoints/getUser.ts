// import { Request, Response } from "express"
// import { connection } from "../data/connection"


// export const getUser = async(req: Request,res: Response): Promise<void> =>{
// 	try {
// 	   let name = req.params.id
	   
// 	   const result = await connection("aula48_exercicio")
// 	    .where("id","like", `%${name}`)
 
// 	   res.status(200).send(result)
	   
// 	} catch (error) {
// 	   console.log(error)
// 	   res.status(500).send("Internal server error")
// 	}

//  }