//Ejmplo hooks useState,useContext

import React,{useContext, useState} from 'react';

//componente 1 dispone de un contexto
//que va a tener un valor que recibe
//del padre

const miContexto=React.createContext(null);

const Componente1 = () => {
    
    const state=useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2/>
        </div>
    );
}



const Componente2 = () => {
    
    const state=useContext(miContexto);
    
    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto(){
    
    const estadoInicial={
        token:"12345",
        sesion:1
    }
    
    //Creamos el estado de este componente

    const [sesionData,setSesionData]=useState(estadoInicial);
    
    function actualizarSesion(){
        setSesionData({
            token:"Cortor2673264",
            sesion:sesionData.sesion+1
        })
    }

    return (
        <miContexto.Provider value={sesionData}>
            {/* //Todo lo que esta aqui adentro puede leer los Datos */}
            {/* //ademas de actualizarse */}
            
            <h1>***Ejemplo useState() y useContext()***</h1>
            <Componente1/>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
    );
}




