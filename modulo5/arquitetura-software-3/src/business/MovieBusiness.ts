import { MovieDatabase } from '../data/MovieDatabase';
import { CustomError } from '../error/CustomError';
import { CreateMovieDTO } from '../model/movieDTO';
import { generationId } from '../services/idGenerator';

export class MovieBusiness {
    async create({ title, description, duration_in_minutes, year_of_release }: CreateMovieDTO)
    :Promise<void> {
        if(!title || !description || !duration_in_minutes || !year_of_release ) {
            throw new CustomError(400,"Dados faltando")
        }

        const id = generationId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}