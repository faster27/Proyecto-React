import React from 'react';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

//Models
import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum';

let user = new User();

const initialCredentials={
    username:"",
    email:"",
    password:"",
    confirm:"",
    role:ROLES.USER 
}

const registerSchema= Yup.object().shape(
    {
        username: Yup.string()
            .min(6,"Nombre debe contener al menos 6 caracteres")
            .max(12,'Nombre demasiado largo')
            .required('Nombre de usuario es obligatorio'),

        email: Yup.string()
            .email('Formato de email invalido')
            .required('Email es obligatorio'), 
        
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], 'Debe seleccionar un role de usuario')
            .required('El role es obligatorio'),
        
        password: Yup.string()
            .min(8,'Contraseña debe contener al menos 8 caracteres')
            .required('Contraseña es obligatoria'),
         
        confirm: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Los campos de contraseña deben coincidir'
                )
            }).required('Se debe confirmar la contraseña')    
              
    }
)

const submit=(values) =>{
    alert("register user")
}

const RegisterFormik = () => {
    return (
        <div>
            <h4>Formulario de registro</h4>
            <Formik
                initialValues={initialCredentials}
                // ***Yup validacion del esquema
                validationSchema={registerSchema}  
                //Onsubmit event
                onSubmit={async (values) =>{
                    await new Promise((r)=>setTimeout(r,1000));
                    alert (JSON.stringify(values,null,2));
                }}       
            >
                {/* Obtenemos props de formik */}
                
                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur})=>(
                        <form>
                            <label htmlFor='username'>Username</label>
                            <Field 
                                id="username" 
                                type="text" 
                                name="username" 
                                placeholder="Your username"></Field>

                            {/* Username Errors */}
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name="username" component="div"></ErrorMessage>     
                                )
                            }

                            <label htmlFor='email'>Email</label>
                            <Field 
                                id="email" 
                                type="email" 
                                name="email" 
                                placeholder="example@email.com"></Field>
                            
                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component="div"></ErrorMessage>     
                                )
                            }

                            <label htmlFor='password'>Password</label>
                            <Field 
                                id="password" 
                                type="password" 
                                name="password" 
                                placeholder="password"></Field>
                            
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (   
                                    <ErrorMessage name="password" component="div"></ErrorMessage>     
                                )
                            }

                            <label htmlFor='confirm'>Password</label>
                            <Field 
                                id="confirm" 
                                type="password" 
                                name="confirm" 
                                placeholder="confirm password"></Field>
                            
                            {/* Confirm password Errors */}
                            {
                                errors.confirm && touched.confirm && 
                                (   
                                    <ErrorMessage name="confirm" component="div"></ErrorMessage>     
                                )
                            }

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                        



                            
                        </form>
                    )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
