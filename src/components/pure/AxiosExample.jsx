import React , { useState, useEffect } from 'react';
import { getUser } from '../../services/axiosService'

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //    obtainUser();  
    // }, []);

    const obtainUser = () => {
        getUser()
        .then((response) => {
            if(response.status === 200){
                setUser(response.data.results)
            }
        })
        .catch((error) => {
            alert('Algo salio mal', {error})
        })  
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {
                user != null ?
                (
                    <div>
                        {/* <img alt='avatar' src={user.picture.large} /> */}
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h3>{user.email}</h3>
                    </div>
                )
                :
                (
                    <div>
                        <p>Genere un nuevo usuario</p>
                        <button onClick={obtainUser}>
                            Random User
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default AxiosExample;
