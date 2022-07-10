import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login, getAllUsers, getAllPagedUsers, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../services/axiosCRUDservice';

const loginSchema =Yup.object().shape(
    {
        email: Yup.string()
                .email('Formato de email invalido')
                .required('Email es obligatorio'),
        password: Yup.string()
                .required('Contraseña es obligatoria')        
    }
);

const AxiosCRUDExample = () => {

    const initialCredential={
        email:"",
        password:""
    }
    
    const authUser= (values) => {
        login(values.email,values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token)
                }else{
                    sessionStorage.removeItem('token');
                    throw new Error('Error en el login')
                }
               
            })
            .catch((error) => {
                alert(`Algo fue mal: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log("Login realizado con exito") )
        }

    //CRUD Examples
    
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data.data && response.status === 200){
                    console.log(response.status)
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error(`No Users found`)
                }
            })
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    console.log(response.status)
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error(`No Users found in page ${page}`)
                }
            })
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    console.log(response.status)
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201){
                    console.log(response.status)
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not created')
                }
                
            })
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then((response) => {
                if(response.data && response.status === 200){
                    console.log(response.status)
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not found and not updated')
                }
            })
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if(response.status === 204){
                    console.log(response.status)
                    alert(`User with id: ${id} deleted succesfully`)
                }else{
                    throw new Error('User not found and not delete done')
                }
            })
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }
    
    
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                //valores que tomara el formulario por defecto
                initialValues={ initialCredential }
                // ***Yup validacion del esquema
                validationSchema={loginSchema}
                //Onsubmit event
                onSubmit={async (values) =>{
                    authUser(values)
                }}  
            >

                {/* Obtenemos props de formik */}
                
                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur})=>(
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com"></Field>
                            
                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                
                                        <ErrorMessage name="email" component="div"></ErrorMessage>
                                    
                                )
                            }

                            <label htmlFor='password'>Password</label>
                            <Field id="password" type="password" name="password" placeholder="password"></Field>
                            
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    
                                        <ErrorMessage name="password" component="div"></ErrorMessage>
                                    
                                )
                            }

                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                          
                        
                        </Form>
                )}   
            </Formik>
            {/* Botones para test la Api repuestas */}
            <div>
                <button onClick={obtainAllUsers}>
                    Obten todos los usuarios Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Obten todos los usuarios (Page 1) Axios
                </button>
                <button onClick={() => obtainUserByID(1)}>
                    Obten usuario 1
                </button>
                <button onClick={() => createNewUser('Daniel', 'Engineer')}>
                    Crear Usuario
                </button>
                <button onClick={() => updateUser(1,'Jorge', 'Engineer')}>
                    Actualizar Usuario
                </button>
                <button onClick={() => deleteUser(1)}>
                    Eliminar Usuario
                </button>
            </div>
            
        </div> 
    );
}

export default AxiosCRUDExample;
