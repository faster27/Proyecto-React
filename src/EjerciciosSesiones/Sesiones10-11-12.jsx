import React,{ useState } from 'react';

let red = 0;
let green= 100;
let blue= 0;

let pararCambioColor=true;
let intervalID;

const initialStyle={
    width: '250px',
    height: '250px',
    backgroundColor: `rgb(${red},${green},${blue})`,
       
}



const Sesiones101112 = () => {

    const [colorBoton, setColorBoton] = useState( initialStyle);
    
    
    function CambiarColor(){
    
            red=Math.floor(Math.random() * 256);
            green=Math.floor(Math.random() * 256);
            blue=Math.floor(Math.random() * 256);

            setColorBoton(
            {
                width:'250 px',
                height: '250 px',
                backgroundColor: `rgb(${red},${green},${blue})`

            }
            
           
            )

            console.log(colorBoton.backgroundColor)

        
    }

    function stopChangeColor(){
        clearInterval(intervalID);
        
    }

    function arrancaIris(){

        intervalID = setInterval(CambiarColor, 1000);
        
    }


    

    return (
        <div>
            <button style={colorBoton} onMouseOver={arrancaIris} onMouseLeave={stopChangeColor} onDoubleClick={stopChangeColor} ></button>
        </div>
    );
}

export default Sesiones101112;
