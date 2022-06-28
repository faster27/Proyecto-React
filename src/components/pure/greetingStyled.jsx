import React, { useState } from 'react';

//Definiendo estilos en constantes

const loggedStyle={
    color: "white"
};

//Estilo para usuario no logeado

const unloggedStyle={
    color: "tomato",
    fontweight:"bold"
}

const GreetingStyled = (props) => {
    //Generamos un estado para saber 
    //Si el usuario esta o no logeado

    const [logged, setLogged] = useState(false);
    
    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
           { logged ? 
                ( <p>Hola, { props.name }</p> )
                :
                (<p>Please login</p>)
           }
           <button onClick={() =>{
            console.log("boton pulsado");
            setLogged(!logged);
           }}>
                {logged ? "Logout" : "Login" }
           </button>
        </div>
    );
}

export default GreetingStyled;
