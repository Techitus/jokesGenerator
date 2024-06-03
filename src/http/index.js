import axios from "axios"

const API = axios.create({
    baseURL : 'https://v2.jokeapi.dev/joke/'
})
export default API