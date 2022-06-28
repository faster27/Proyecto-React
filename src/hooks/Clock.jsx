import React, { useEffect} from 'react';
import { useState } from 'react';

const Clock = () => {
    
    const initialClock={
        fecha: new Date(),
        edad:0,
        nombre: "Daniel",
        apellidos: "Correa Lenis"
    }

    const [clock, setClock] = useState(initialClock);
    
    useEffect(()=>{
        const intervaID =setInterval(()=>{
            tick();
        }, 1000)

        return () => {
            clearInterval(intervaID)
        };
    },[])
    
    return (
        <div>
            <h2>
            Hora Actual:
            {clock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clock.nombre} {clock.apellidos}</h3>
            <h1>Edad: {clock.edad}</h1>
         </div>
    );

    function tick(){
        setClock((clock) => {
           let edad = clock.edad +1;
           return {
              ...clock,
              fecha: new Date(),
              edad
           }
        });
     }
}



export default Clock;
