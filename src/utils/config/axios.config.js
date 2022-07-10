import axios from "axios";

//Configurar default para Axios

export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        //baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 6000
    }
)

