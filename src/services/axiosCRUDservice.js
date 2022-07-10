import axios from "axios";


export const login = (email, password) => {

    let body = {
        email : email,
        password : password
    }

    //retorna una promesa con la respuesta
    return axios.post('https://reqres.in/api/login', body )
}


//Obtener todos los usuarios
export const getAllUsers = () =>{
    return axios.get('https://reqres.in/api/users')
}

//Obtener todos las paginas de usuario
export const getAllPagedUsers = (page) =>{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//Obtener usuario por id
export const getUserByID = (id) =>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//Crear usuario
export const createUser = (name, job) =>{

    let body = {
        name : name,
        job : job
    }

    return axios.post('https://reqres.in/api/users', body)
}

//Actualizar usuario
export const updateUserByID = (id, name, job) =>{

    let body = {
        name : name,
        job : job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//Eliminar usuario
export const deleteUserByID = (id) =>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}