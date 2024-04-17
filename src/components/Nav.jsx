
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Task from './Task';
import Register from './Register';
import Login from './Login';
import Home from './Home';

const Nav = () => {

    return (
        <div>
      <BrowserRouter>
      <Routes>
        
       <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/task' element={<Task/>}/>
        
      </Routes>
      </BrowserRouter>
            
        </div>
    );
};

export default Nav;