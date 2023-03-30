import { outputUserById } from "./User"


export interface UserRepository {

    getUserById (id: string): Promise<outputUserById | undefined>

    getAllUsers (): Promise<outputUserById[]>

}