import React from 'react';
import {useContext} from 'react';
import createUsercontextdata from '../context/Usercontex';
import { Link, useNavigate} from 'react-router-dom';
const Home = () => {
  const { isdata,}=useContext(createUsercontextdata)
    return (
        <div >

<nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">TASK MANAGEMENT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      <div className='navbarsize loginpage'>
      <ul className="navbar-nav">
        <li className="nav-item ">
        <Link to={"/"} >{isdata?"":<button className="btnh m-3" >Home</button>}</Link>
        </li>
        <li className="nav-item  ">
        <Link to={"/task"} >{isdata?<button className="btnh m-3" >Task</button>:""}</Link>
        </li>
        <li className="nav-item  ">
        <Link to={"/task"} >{isdata?<button className="btnh m-3" >Task</button>:""}</Link>
        </li>
      
        <li className="nav-item  ">
        <Link to={"/login"} >{isdata?"":<button className="btnh m-3" >Login</button>}</Link>
        </li>
        <li className="nav-item  ">
        <Link to={"/register"} >{isdata?"":<button className="btnh m-3" >SignUp</button>}</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav> 




     <div className='bg-image'>


         
         <h1 className='homeheading'>WELCOME</h1>
         </div>
        </div>
    );
};

export default Home;