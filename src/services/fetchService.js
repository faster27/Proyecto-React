export const getAllUsers = async () => {
  
    let response = await fetch('https://rickandmortyapi.com/api/character');
        
    console.log('Respuesta: ', response)

    //We return de JSON

    return response.json()
}

export const getAllPagedUsers = async (page) => {
  
    let response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        
    console.log('Respuesta: ', response)

    //We return de JSON

    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        
    console.log('Respuesta: ', response)

    //We return de JSON

    return response.json()
}

export const login = async (email, password) => {

    let body = {
        email: email,
        password: password
    }



    let response = await fetch('https://reqres.in/api/login',{
        method:'POST',
        //mode:'no-cors',
       // credentials: 'omit',
        //cache:'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body: JSON.stringify(body),
    });

    return response.json();

}
