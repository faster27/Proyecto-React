import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const loginSchema =Yup.object().shape(
    {
        email: Yup.string()
                .email('Formato de email invalido')
                .required('Email es obligatorio'),
        password: Yup.string()
                .required('Contraseña es obligatoria')        
    }
);

const LoginFormik = () => {

    const initialCredential={
        email:"",
        password:""
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
                    await new Promise((r)=>setTimeout(r,1000));
                    alert (JSON.stringify(values,null,2));
                    //Se guardan los datos en el almacenamiento local
                    localStorage.setItem('credential', values)
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
        </div>    
    );
}

export default LoginFormik;
