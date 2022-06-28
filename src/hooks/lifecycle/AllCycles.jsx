import React,{useEffect} from 'react';

const AllCycles = () => {
    
    useEffect(() => {
        console.log("Componente actualizado")
        
        const intervaID =setInterval(()=>{
            document.title=`${new Date()}`
            console.log("Actualizacion del componente")
        }, 1000)
        
        return () => {
            console.log("Componente va a desaparecer")
            document.title="Tiempo detenido"
            clearInterval(intervaID)
        };
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
