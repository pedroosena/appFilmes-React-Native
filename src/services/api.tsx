import axios from "axios";

//https://api.themoviedb.org/3/movie/now_playing?api_key=837a463656137c59d08d3f6b4d57b33a&language=pt-BR&page=1

export const key = '837a463656137c59d08d3f6b4d57b33a'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;