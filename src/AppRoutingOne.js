import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom';
import { useParams } from 'react-router'
import { useEffect } from 'react';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged= false;

  const {id}=useParams();

  
  
  let taskList= [
    {
      id:1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id:2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  const TaskDetailWrapper = () => {
    const { id } = useParams();
    return <TaskDetailPage task={taskList[id-1]} />;
  };

  useEffect(() => {
    logged=  localStorage.getItem('credential'); 
  },[]);

  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/login'>| Login |</Link>
          <Link to='/any404'>| Ruta Inexistente ||</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> } />
            <Route exact path='/online-state' element={<StatePage/>}/>
            <Route 
              path='/login' 
              element={logged ?
              <Navigate to="/"  />
              :
              <LoginPage/>
              
              }
            />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/faqs' element={<AboutPage/>} />   
            <Route 
              path='/profile' 
              element={logged ?
              <ProfilePage/> 
              :
              <Navigate replace to="/login"  />
              }
            />
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route 
              path='/task/:id'
              element = {<TaskDetailWrapper/>}
              > 
            </Route>
            
            {/* 404 - Page Not Found */}
            <Route path='*' element={ <NotFoundPage/> } />
          </Routes>
        </main>
      </div>


      
    </Router>
  );
}

export default AppRoutingOne;
