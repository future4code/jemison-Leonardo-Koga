import express from 'express'
import { MovieController } from '../controller/MovieController'

export const movieRouters = express.Router()

const movieController = new MovieController()

movieRouters.post("/create", movieController.create)