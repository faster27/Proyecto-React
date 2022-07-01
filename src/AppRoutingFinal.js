import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import { type } from '@testing-library/user-event/dist/type';

function AppRoutingFinal() {

  //TODO Cambiar el estado por el sesionStory
  let loggedIn=sessionStorage.getItem('Sesion');
  
  return (
    <Router>
      <main>
      <Routes>
        {/* Redirecciones para proteger nuestras rutas */}
        <Route 
          exact path='/' 
          element={loggedIn==='true'?
            <Navigate to='/dashboard'/>
            :
            <Navigate to='/login'/>
          }
        />
        {/* Ruta a profile*/}
        <Route 
              path='/profile' 
              element={loggedIn==='true' ?
              <ProfilePage/> 
              :
              <Navigate replace to="/login"  />
              }
        />
        {/* Ruta a tareas*/}
        <Route 
          path='/tasks' 
          element={loggedIn==='true'?
            <TasksPage/>
            :
            <Navigate replace to="/login"  />
            }
          />
        {/* Ruta de login */}
        <Route  
          path='/login' 
          element={<LoginPage/>} 
        />
        {/* DashBoard ruta */}
        <Route  
          path='/dashboard'
          element={loggedIn==='true' ?
            (<DashBoardPage/>)
            :
            (<Navigate from='/' to="/login"  />)
          }   
        />
        <Route 
          path='/register'
          element={<RegisterPage/>}
        />    
       
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingFinal;
