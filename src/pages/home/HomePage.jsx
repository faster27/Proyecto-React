import React from 'react';
import {useNavigate, useLocation, useSearchParams} from 'react-router-dom'


const HomePage = () => {

    const [params, setParams]=useSearchParams();

    const location= useLocation();
    const navigate= useNavigate();
    

    const navigateTo=(path)=>{
        navigate(path)
    }

 
    
    const navigateProps =(path)=>{
          
        navigate(
            path,
            {   
                state:{
                    name:'?online=true',
                    online:true
                }
                
            }
            
            
        )
            
    }
    
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigateTo('/profile')}>
                Go to Profile
            </button>  
            <button onClick={()=>navigateProps('/online-state')}>
                Go to State
            </button> 
        </div>
    );
}

export default HomePage;
