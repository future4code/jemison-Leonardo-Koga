import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError"
import { InvalidEmail, InvalidName, InvalidPassaword } from "../error/UserErrors"
import { User } from "../model/User"
import { CreateUserDTO } from "../model/userDTO"
import { generationId } from "../services/idGenerator"


export class UserBusiness {
  async create({ email, name, password }: CreateUserDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new CustomError(400, "Dados inválidos (email, name, password)")
    }

    if(!email.includes("@")){
      throw new InvalidEmail()
    }

    if(password.length <= 6){
      throw new InvalidPassaword
    }

    if(!name.includes("Number")){
      throw new InvalidName
    }

    const id = generationId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async get(): Promise<User[]> {

    return await new UserDatabase().get()
  }
}
