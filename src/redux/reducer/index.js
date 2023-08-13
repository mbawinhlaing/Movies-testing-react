import { combineReducers } from "redux";
import { moviesReducer } from "./movie";

const reducers = combineReducers({
    movies : moviesReducer
})
export default reducers;