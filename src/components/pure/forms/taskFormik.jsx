import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';



const initialCredentials={
    taskname:"",
    description:"",
    completed: false,
    level: LEVELS.NORMAL 
}

const taskSchema =Yup.object().shape(
    {
        taskname: Yup.string()
            .required('Nombre de la tarea es obligatorio'),

        description: Yup.string()
            .required('Descripción de la tarea es necesaria'),
                
        completed : Yup.bool(),
        
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENTE, LEVELS.BLOCKING ], 'Debe seleccionar un nivel de tarea')      
    }
);


const TaskFormik = ({add, length}) => {

    const levelRef=useRef(LEVELS.NORMAL);

    function addTask(values){
       // e.preventDefault();
        const newTask=new Task(
            values.taskname,
            values.description,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <div>
            <h4>Añadir tarea</h4>
            <Formik
                initialValues={initialCredentials}
                // ***Yup validacion del esquema
                validationSchema={taskSchema}
                //Onsubmit event
                onSubmit={async (values) =>{
                    await new Promise((r)=>setTimeout(r,1000));
                    addTask(values)
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
                            
                            <label htmlFor='taskname'></label>
                            <Field id="taskname" type="text" name="taskname" placeholder="Task Name" required autoFocus className='form-control form-control-lg'></Field>
                            
                            {/* Task Name Errors */}
                            {
                                errors.taskname && touched.taskname && 
                                (
                                    <ErrorMessage name="taskname" component="div"></ErrorMessage>   
                                )
                            }

                            <label htmlFor='description'></label>
                            <Field id="description" type="text" name="description" placeholder="Description" className='form-control form-control-lg'></Field>
                            
                            {/* Description Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component="div"></ErrorMessage>   
                                )
                            }

                            <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                                <option  value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option  value={LEVELS.URGENTE}>
                                    Urgente
                                </option>
                                <option  value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>
                            </select>

                            <button type="onSubmit" className='btn btn-success btn-lg ms-2'  >
                                {length> 0  ? 'Add new task' : 'Create your first task' }   
                            </button>
                            {isSubmitting ? (<p>Añadiendo tarea</p>) : null}


                        </Form>


                    )}
            </Formik>
        </div>
    );
}

TaskFormik.protoTypes={
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskFormik;
