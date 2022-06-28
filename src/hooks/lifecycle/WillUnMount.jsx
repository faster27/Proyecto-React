//Ejemplo de uso del metodo component WillUnMount para componente
//clase y ejemplo de Hooks en componente funcional

import React, { Component,useEffect } from 'react';

export class WillUnmount extends Component {
    
    componentWillUnmount(){
        console.log("Comportamiento antes de que el compoente desaparezca")
    }
    
    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}



export const WillUnmountHook = () => {
    
    useEffect(() => {
        return () =>{
            console.log("Comportamiento antes de que el compoente desaparezca")
        };
    }, []);

    return (
        <div>
            WillUnMount
        </div>
    );
}




