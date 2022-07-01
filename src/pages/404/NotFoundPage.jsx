import React from 'react';
import {useNavigate} from 'react-router-dom'

const NotFoundPage = () => {

    const navigate=useNavigate();

    const navigateTo=(path) =>{
        navigate(path, {replace: true});
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={()=>navigateTo('/')}>
            Go Home
            </button>
        </div>
    );
}

export default NotFoundPage;
