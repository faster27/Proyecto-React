import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task-list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4';
import MiComponenteConContexto from './hooks/Ejemplo3';
import GreetingStyled from './components/pure/greetingStyled';
import ClockC from './hooks/ClockC';
import Clock from './hooks/Clock';
import Father from './components/container/father';
import TasksPage from './pages/tasks/TasksPage';
import OptionalRender from './components/pure/optionalRender';
import Sesiones101112 from './EjerciciosSesiones/Sesiones10-11-12';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      
        {/* Componente propio greetings.jsx */}
        {/* <Greeting name={"Daniel"}></Greeting>  */}
        {/*<Greetingf name="Daniel"></Greetingf>*/}
        {/*Componente de listado de tareas  */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre="Daniel">
          <h3>
            Este contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <Clock></Clock> */}
        {/* <GreetingStyled name="Daniel"></GreetingStyled> */}
      {/* </header> */}
      {/* <TaskListComponent/> */}
      {/* Gestion de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de renderizado condiconal */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <Sesiones101112></Sesiones101112> */}
      
      {/* Ejemplos de uso de formik y yup */}
      {/* <LoginFormik></LoginFormik> */}

      {/* <RegisterFormik></RegisterFormik> */}


      {/* PROYECTO FINAL */}
      <TasksPage></TasksPage>
      

      

      

    </div>
  );
}

export default App;
