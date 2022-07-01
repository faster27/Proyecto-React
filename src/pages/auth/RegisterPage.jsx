import React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const RegisterPage = () => {

    const navigate =useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>Register Page</h1>
            <Button variant="contained" onClick={()=>navigateTo("/login")}>Go to Login</Button>
        </div>
    );
}

export default RegisterPage;
