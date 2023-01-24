export interface CreateMovieDTO {
    title: string,
    description: string,
    duration_in_minutes: string,
    year_of_release: string
}

export interface InsertCreateMovieDTO {
    id: string,
    title: string,
    description: string,
    duration_in_minutes: string,
    year_of_release: string
}