import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';

function AppRoutingFinal() {

  //TODO Cambiar el estado por el sesionStory
  let loggedIn=true;

  return (
    <Router>
      <main>
      <Routes>
        {/* Redirecciones para proteger nuestras rutas */}
        <Route 
          exact path='/' 
          element={loggedIn?
            <Navigate to='/dashboard'/>
            :
            <Navigate to='/login'/>
          }
        />
        <Route 
              path='/profile' 
              element={loggedIn ?
              <ProfilePage/> 
              :
              <Navigate replace to="/login"  />
              }
        />
        <Route 
          path='/tasks' 
          element={loggedIn?
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
          element={loggedIn ?
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
