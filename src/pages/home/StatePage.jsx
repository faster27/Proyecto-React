import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location=useLocation();
    

    console.log('Location State: ', location.state.online)
    console.log('Query Params: ',location)

    

    return (
        <div>
            <h1>State: {location.state.name ? 
            'The user is online'  
            : 
            'The user is offline'}
            </h1>
        </div>
    );
}

export default StatePage;
