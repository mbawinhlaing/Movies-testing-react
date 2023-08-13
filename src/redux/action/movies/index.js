import { actionType } from "../_actionTypes"

export const fetchMovies = (movies) => {
    return {
        type: actionType.FETCH_MOVIES,
        payload : movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type : actionType.SELECT_MOVIE,
        payload : movie
    }
}

export const removeSelectedMovie = (movie) => {
    return {
        type : actionType.REMOVE_SELECTED_MOVIES,
        payload : movie
    }
}