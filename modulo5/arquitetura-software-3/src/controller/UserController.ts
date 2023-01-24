import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CreateUserDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {

      const input: CreateUserDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

  async getAll(req: Request, res: Response):Promise<void> {
    try{

      const users = await new UserBusiness().get();
      
      res.send(users).status(200);

    } catch (error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
}
