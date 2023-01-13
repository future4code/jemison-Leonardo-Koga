import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../class/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        // const newUser: User = {
        //     id: Date.now().toString(),
        //     email,
        //     password
        // }
        // await connection(TABLE_USERS).insert({
        //     id: newUser.id,
        //     email: newUser.email,
        //     password: newUser.password
        // })
        const newUser= new User(id, email, password)

        await connection(TABLE_USERS).insert(newUser)
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}