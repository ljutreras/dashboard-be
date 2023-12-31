
import config from '../../../config/Index'
import { Request, Response } from "express"
import StatusCode from '../../../../context/shared/constants/StatusCode'
import { MongoRepository } from '../../../../context/shared/persistance/MongoRepository'

export const GetAllUserController = async (req: Request, res: Response) => {
    try {
        const user = MongoRepository.create(config.DATABASE, config.COLLECTION).connectToDatabase()
        const result = await user.find().toArray()
        if (!result) res.status(StatusCode.NO_CONTENT).json()
        res.status(StatusCode.OK).json(result);
    } catch (e) {
        console.error(e)
    }
    
}
