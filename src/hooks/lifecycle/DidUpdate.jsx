//Ejemplo de uso de metodo componente DidUpdate en componente
//clase y uso de Hook en componente fncional

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    
    componentDidUpdate(){
        console.log("Comportamineto cuando el componente recibe nuevos props o cambio en su estado provado")
    }
  
    render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook=()=> {
  
    useEffect(() => {
        console.log("Comportamineto cuando el componente recibe nuevos props o cambio en su estado provado")  
    });
  
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
  )
}
