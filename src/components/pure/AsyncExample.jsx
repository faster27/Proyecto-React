import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1;
    }
    
    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
        .then((response) => alert(`Response : ${response}`))
        .catch((error)=> alert(`Algo salio mal: ${error}`));
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
        .then((response) => alert(`Response : ${response}`))
        .catch((error)=> alert(`Algo salio mal: ${error}`));
    }
 
    async function saveSessionStorage(key, value){
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name','Daniel')
            .then((response)=> {
                let value = response;
                alert(`Saved Name: ${value}`);
            }).catch((error)=> {
                alert(`Algo salio mal: ${error}`)
            }).finally(()=> console.log('SUCCESS: Name save and retrive'))
    }

    const returnError =async()=>{
        await Promise.reject(new Error('Ooooops!'))
    }

    async function obtainMessage(){

        let promise = new Promise((resolve, reject) => {

            setTimeout(()=> resolve('Hello world'),2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Todo esta bien: ${response}`))
            .catch((error) => alert(`Algo salio mal: ${error}`))
            .finally(()=> alert(`Finally executed`))
    }

    const urlNotFound = async () => {
        try {
            let response= await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Algo salio mal con la URL: ${error}`)
        }
    }

    const multiplePomises = async () => {
        let results = await Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch((error) =>  alert(`Algo salio mal con la URL: ${error}`))
    }


    return (
        <div>
            <h1>Ejemplos de Asincronia</h1>
            <button onClick={obtainNumber}>Obtener numero</button>
            <button onClick={obtainPromiseNumber}>Obtener numero</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Receive message in 2 second</button>
            <button onClick={consumeError}>Obtener error</button>
            <button onClick={urlNotFound}>Solicitud a URL</button>
            <button onClick={multiplePomises}>Multiple Promises</button>

        </div>
    );
}

export default AsyncExample;
