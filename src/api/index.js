import axios from "axios";

export const api_key = '18acdb7a8a114e76d82e97b376f2dcce';
export const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})