import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public getUserById = async(id: string): Promise<any> => {
        const result = await UserDatabase.connection
          .select("*")
          .from("User_Arq1")
          .where({ id });
    
        return result[0];
       }
}