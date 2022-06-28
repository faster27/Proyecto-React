// Ejemplo de uso de 
// useState 
// useRef
// useEffect


import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    
    //dos contadores 
    const [contador1,setContador1]=useState(0); 
    const [contador2,setContador2]=useState(0); 
    
    ///Vamos a crear una refernci con useRef
    //para asociar una variable con un elemento de la
    //vista html

    const miRef=useRef();

    function incrementar1(){

        setContador1(contador1+1);
    }
    
    function incrementar2(){

        setContador2(contador2+1);
    }

    //trabajamos con useEffect
    //cada vez que haya un cambio se ejectue lo que sta dento del useEffect

    // useEffect(() => {
    //     console.log("cambio en el estado de componente");
    //     console.log("Mostrando referencia a elemento");
    //     console.log(miRef);
    // });

    //Ejecutar solo cuando cambie el contador 1
    // useEffect(() => {
    //     console.log("cambio en el estado de contador 1");
    //     console.log("Mostrando referencia a elemento");
    //     console.log(miRef);
        
    // }, [contador1]);

    //Ejecutar solo cuando cambie contador 1 o contador 2
    useEffect(() => {
        console.log("cambio en el estado de contador 1 o contador 2");
        console.log("Mostrando referencia a elemento");
        console.log(miRef);
        
    }, [contador1,contador2]);


    return (
        <div>
            <h1>***Ejemplo de useState,useRef,useEffect()***</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={ incrementar1 }>Incrementar contador 1</button>
                <button onClick={ incrementar2 }>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
