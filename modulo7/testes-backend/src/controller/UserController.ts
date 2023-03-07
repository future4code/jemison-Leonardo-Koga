import { UserBusiness } from './../business/UserBusiness';
import { Request, Response} from "express"

export class UserController {
    constructor (private userBusiness: UserBusiness) {}

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id
            const result = await this.userBusiness.getUserById(id)
            res.status(200).send(result)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}