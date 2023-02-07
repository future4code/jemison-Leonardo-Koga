import { CustomError } from '../error/CustomError';
import { InsertCreateUserDTO } from '../model/userDTO';
import { User } from './../model/User';
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: InsertCreateUserDTO): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async get(): Promise<User[]>{

    try {
      const users: User[] = []

      const result = await UserDatabase.connection()
        .select('*')
        .from('LABEFLIX_USER');
      
      for(let user of result){
        users.push(user);
      }

      return users;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }
}
