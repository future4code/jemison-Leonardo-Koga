import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../errors/CustomError"

export class UserBusiness {
    constructor (private userDatabase: any) {}

    getUserById = async (id: string): Promise<any> => {
        try {
            if (id === ":id") {
                throw new Error()
            }

            const result = await this.userDatabase.getUserById(id)

            if (!result) {
                throw new Error()
            }

            return result

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}