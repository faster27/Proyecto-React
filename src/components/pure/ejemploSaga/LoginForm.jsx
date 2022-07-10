import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Navigate } from 'react-router-dom';

const loginSchema =Yup.object().shape(
    {
        email: Yup.string()
                .email('Formato de email invalido')
                .required('Email es obligatorio'),
        password: Yup.string()
                .required('Contraseña es obligatoria')        
    }
);

const LoginForm = ({loged, fetching, onLogin}) => {

    const initialCredential={
        email:"",
        password:""
    }

    return (
        <Formik
                //valores que tomara el formulario por defecto
                initialValues={ initialCredential }
                // ***Yup validacion del esquema
                validationSchema={loginSchema}
                //Onsubmit event
                onSubmit={async (values) =>{
                    onLogin(values.email, values.password)
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
                            {fetching ? (<p>Cargando</p>) : null}
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                           
                        
                        </Form>
                )}
                
               
                
            
            </Formik>
    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;
