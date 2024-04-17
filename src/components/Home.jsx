import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className='bg-image'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TASK</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav loginpage">
        
            <Link to={"/"} ><button className="btnh m-3 " >Home</button></Link>
            <Link to={"/task"} ><button className="btnh m-3 " >Task</button></Link>
            <Link to={"/login"} ><button className="btnh m-3" >Login</button></Link>
            <Link to={"/register"} ><button className="btnh m-3 ">SignUp</button></Link>
       
      </div>
     
    </div>
  </div>
</nav>
         
         <h1 className='homeheading'>WELCOME</h1>
            
        </div>
    );
};

export default Home;