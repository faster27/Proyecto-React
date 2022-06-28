// Ejemplo de uso del Hook useState
// Crear un componente de tipo funcion
// y acceder a su estado provado meidnate un hook
// y modificarlo

import React,{ useState } from 'react';

const Ejemplo1 = () => {
    
    //valor incial para un cntador
    const valorInicial=0;

    //valor incial para una persona
    const personaInicial={
        nombre:"Daniel",
        email:"dcorrealenis@gmail.com"
    }

    //Queremos que el valor inicial y personainicial
    //sean parte del estado del componente para asi gestnoar
    //su cambio y que este se vea reflejado en la vista del componente

    const [contador,setContador]=useState(valorInicial);
    const [persona,setPersona]=useState(personaInicial);
    
    function incrementarContador(){

        setContador(contador+1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre:"Carlos",
                email:"Carlos@gmail.com"
            }
        )
    }
    
    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos Persona</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>
            {/* Bloque de botones para actualizar el estado */}
            <div>
                <button onClick={ incrementarContador }>Incrementar contador</button>
                <button onClick={ actualizarPersona }>Actualizar persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;

