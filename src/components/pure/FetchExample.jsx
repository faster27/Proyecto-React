import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2);
    const [totalUsers, setTotalUsers] = useState(12);
    const [userPerPage, setUserPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('AllUsers: ', response.results);
                
                
                setUsers(response.results);
                setPages(response.info.pages)
                setTotalUsers(response.info.count)
                setUserPerPage(Object.keys(response.results).length)
            })
            .catch((error) => {
                alert(`Error con los usuarios: ${error}`)
            })
            .finally(() => {
                console.log('Termino de obtener los usuarios')
                console.table(users)
            })
    }

    const obtainPageUser = (page) =>{
        getAllPagedUsers(page)
        .then((response) => {
            console.log('AllPageUsers: ', response.results);
            setUsers(response.results);
            setPages(response.info.pages)
            setTotalUsers(response.info.count)
            setUserPerPage(Object.keys(response.results).length)
        })
        .catch((error) => {
            alert(`Error con los usuarios: ${error}`)
        })
        .finally(() => {
            console.log('Termino de obtener los usuarios')
            console.table(users)
        })
    }

    const obtainUserDetails=(id) =>{
        getUserDetails(id)
            .then((response) => {
                console.log('Desde detalles de usuario: ', response);
                setSelectedUser(response);
            })
            .catch((error) => {
                alert(`Error con los usuarios: ${error}`)
            })
            .finally(() => {
                console.log('Termino de obtener los usuarios')
                console.table(selectedUser)
            })
    }

    const authUser= () => {
        login('eve.holt@regres.in','cityslicka')
            .then((response) => {
                console.log('Token: ', response.token);
                sessionStorage.setItem('token', response.token)
            })
            .catch((error) => {
                alert(`Error con el login: ${error}`)
            })
            .finally(() => {
                console.log('Termino de obtener los usuarios')
            })
    }

    return (
        <div>
            {/* Boton para simular el login */}
            <button onClick={authUser}>Auth User</button>
            <h2>
                Users: 
            </h2>
            {users.map((user, index) =>
                (<p key={index} onClick={()=> obtainUserDetails(user.id)}>
                    {user.name} {user.status}
                </p>)
                )
            }
            <p>Mostrando {userPerPage} usuarios de {totalUsers} en total</p>
            <button onClick={()=>obtainPageUser(1)}>
                1
            </button>
            <button onClick={()=>obtainPageUser(2)}>
                2
            </button>
            <div>
                {selectedUser != null?  
                    (
                        <div>
                            <h3>
                                Detalles de Usuario
                            </h3> 
                            <p>Name: {selectedUser.name}</p>
                            <p>Status: {selectedUser.status}</p>
                            <p>Specie: {selectedUser.species}</p>
                            <img alt='Avatar' src={selectedUser.image} style={{height:'150px', width:'150px'}}/>          
                        </div>
                ):
                (<h6>Por favor haga click sobre un personaje para ver los detalles</h6>)
                }
            </div>                 
        </div>
    );
}

export default FetchExample;
