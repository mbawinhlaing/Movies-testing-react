import { actionType } from "../../action/_actionTypes"

const initialState = {
    movies :[],
    movie :{}
}

export const moviesReducer = (state = initialState , {type,payload}) => {
    switch(type){
        case actionType.FETCH_MOVIES:
            return {
                ...initialState, movies : payload
            };
        case actionType.SELECT_MOVIE:
            return{
                ...initialState, movie : payload
            }
        default : return state        
    }
}