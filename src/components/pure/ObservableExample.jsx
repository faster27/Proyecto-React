import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService'; 

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        
        console.log('Subscription to Observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number: ', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Algo fue mal: ${error}`)
                    console.log('error in observable')
                },
                complete(){
                    alert(`Finalizo con: ${number}`) 
                    console.log('Done with observable')
                }
            }
        )
    }

    return (
        <div>
           <h2>Number: {number}</h2>
           <button onClick={obtainNewNumbers}>
                Obtener los numeros
           </button> 
        </div>
    );
}

export default ObservableExample;
