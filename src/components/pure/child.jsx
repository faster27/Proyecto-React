import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef("")
    const nameRef=useRef("")
    
    function pulsarBoton(){
        const text=messageRef.current.value;
        alert(`Text in Input ${text}`);
    }

    function pulsarBotonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background:"cyan",padding:"30px"}}>
            <p onMouseOver={()=>console.log("onMouseOver")}>
                Hello, {name}
            </p>
            <button onClick={() => console.log("Boton 1 clickeado")}>
                Boton 1
            </button>
            <button onClick={pulsarBoton}>
                Boton 2
            </button>
            <button onClick={()=>pulsarBotonParams("hello")}>
                Boton 3
            </button>
            <input  
                onFocus={()=>console.log("input focus")}
                onChange={(e)=>console.log("input change:",e.target.value)}    
                onCopy={()=>console.log("texto copiado")}
                placeholder="Send a text to your father"
                ref={messageRef}
                ></input>
            <button onClick={()=>send(messageRef.current.value)}>
                Send Message
            </button> 
            <div style={{marginTop:"20px"}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='nombre'></input>
                    <button type='submit'>Cambiar nombre</button>
                </form>
            </div>   
        </div>
    );
}

export default Child;
