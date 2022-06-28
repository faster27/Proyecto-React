//Ejemplo para entender e uso de Props.children

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>***Ejemplo de children props***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintara lo que se encunetre entre 
            las etiqras de apertura y cieerre de este componente */}
            
            {props.children}
        </div>
    );
}

export default Ejemplo4;
