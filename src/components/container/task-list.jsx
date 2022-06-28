import React,{ useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/tasks.scss'
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';

const TaskListComponent = () => {
    
    const defaultTask1 =new Task("Example1","Description 1",true,LEVELS.NORMAL);
    const defaultTask2 =new Task("Example2","Description 2",false,LEVELS.URGENTE);
    const defaultTask3 =new Task("Example3","Description 3",true,LEVELS.BLOCKING);



    const[tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente

    useEffect(() => {
        console.log("Modificacion de tareas")
        setTimeout(()=>{
            setLoading(false);
        },2000)
        return () => {
            console.log("Lista de tareas va a desaperecer")
        };
    }, [tasks]);

    function completeTask(task){
        console.log("Complete this task:", task);
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks[index].completed=!tempTasks[index].completed;
        //Actulizamos el estado del componente
        //y actualizaremos la iteracion de la tarea 
        //para que mostrar la tarea actualizada
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log("Delete this task:", task);
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log("Add this task:", task);
        const tempTasks=[...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table=()=>{
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>
                            </TaskComponent>
                            )
                    }
                    )}

                </tbody>
                           
            </table>
        )

    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable=<Table></Table>
    }else{
        tasksTable=(
        <div>
            <h3>No hay tareas para mostrar</h3>
            <h4>Por favor, crea una tarea</h4>
        </div>
        )
    }

    const loadingStyle={
        color: "grey",
        fontSize: "30px",
        fontWeight: "bold"
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* //Card header */}
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    {/* //Card body */}
                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{position:'relative', height:'400px'} }>
                        {loading ? (<p style={loadingStyle}>Loading</p>) : tasksTable}
                    </div>                    
                </div>   
            </div>
            <TaskFormik add={addTask} length={tasks.length}> </TaskFormik> 
        </div>
    );
};

export default TaskListComponent;
