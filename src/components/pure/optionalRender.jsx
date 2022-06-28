import React, { useState } from 'react';

let red = 0;
let green=200;
let blue=150;

const loggedStyle={
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: "white",
    fontweight:"bold"
};

//Estilo para usuario no logeado

const unloggedStyle={
    backgroundColor: 'tomato',
    color: "white",
    fontweight:"bold"
}


//Login / Logout buttons
const LoginButton=({loginAction, propStyle})=>{
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton=({logoutAction, propStyle})=>{
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

//? (Expresion true) && expresion => se rendericza la expresion
//? (expresion false) && expresion => no se renderiza la expresion 



const OptionalRender = () => {
    
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessage] = useState(0);

    // const updateAccess = ()=>{
    //     setAccess(!access);
    // }

    const loginAction=()=>{
        setAccess(true)
    }

    const logoutAction=()=>{
        setAccess(false)
    }

    let OptionalButton;

    // if(access){
    //     OptionalButton=<button onClick={updateAccess}>Logout</button>
    // }else{
    //     OptionalButton=<button onClick={updateAccess}>Login</button>
    // }

    if(access){
        OptionalButton=<LogoutButton propStyle={unloggedStyle }  logoutAction={logoutAction}></LogoutButton>
    }else{
        OptionalButton=<LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    let addMessages=()=>{
        setNMessage(nMessages+1)
    }

    return (
        <div>
            {/* Optional button */}
            { OptionalButton }
            {/* N Messagges unread */}
            {/* {nMessages > 0 && nMessages===1 && <p>You have {nMessages} new message...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>No hay mensajes</p> }
             */}
            {/* Operador ternario */}
            {access ? 
                (<div>
                    {nMessages>0  ? 
                    <p>You have {nMessages} new message{nMessages>1 ? "s": null}...</p> 
                    : 
                    <p>No hay mensajes</p> 
                    }
                    <button onClick={addMessages}>{nMessages === 0 ? "Add your first message":"Add new message"}</button>

                </div>) 
                :
                null
            }
            

            

        </div>
    );
}

export default OptionalRender;
