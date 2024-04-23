import React from 'react';
import {useContext} from 'react';
import createUsercontextdata from '../context/Usercontex';
import { Link, useNavigate} from 'react-router-dom';
const Home = () => {
  const { isdata,}=useContext(createUsercontextdata)
    return (
        <div className='bg-image'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TASK MANAGEMENT</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav loginpage">
        
              
          <Link to={"/"} >{isdata?"":<button className="btnh m-3" >Home</button>}</Link>
            <Link to={"/task"} >{isdata?<button className="btnh m-3" >Task</button>:""}</Link>
            <Link to={"/login"} >{isdata?"":<button className="btnh m-3" >Login</button>}</Link>
            <Link to={"/register"} >{isdata?"":<button className="btnh m-3" >SignUp</button>}</Link>
       
      </div>
     
    </div>
  </div>
</nav>
         
         <h1 className='homeheading'>WELCOME</h1>
            
        </div>
    );
};

export default Home;