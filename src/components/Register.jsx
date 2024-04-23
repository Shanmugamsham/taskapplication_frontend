import React from 'react';
import {useContext} from 'react';
import createUsercontextdata from '../context/Usercontex';
import { Link, useNavigate} from 'react-router-dom';
const Register = () => {

    const {username,setusername,email,setemail,password,setpassword,msgerro,setmsgerror,handlesubmitforregister,gettask,
      isloadingregister,erroeemailregister,isdata}=useContext(createUsercontextdata)
    return (
      <div>
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

         
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">


       
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='heading'>Register</h2>
           <form onSubmit={handlesubmitforregister}>
  <div className="mb-3">
    <label htmlFor='name'><strong>Name:</strong></label>
    <input type="text" className="form-control rounded-0" autoComplete='off' name='name' value={username} onChange={(e)=>setusername(e.target.value)} required />
  </div>
  
  <div className="mb-3">
    <label htmlFor='email'><strong>Email:</strong></label>
    <input type="email" className="form-control rounded-0" autoComplete='off' name='email'  value={email}  onChange={(e)=>setemail(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <label htmlFor='password'><strong>Password:</strong></label>
    <input type="password" className="form-control rounded-0" autoComplete='off' name='password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
  </div>
  <div id="emailHelp" className="message mb-3">{erroeemailregister}</div>
  {
  isloadingregister&&(<div className='d-flex justify-content-center loading  '>
   <h2>Loading......</h2>  
  </div>)
       }
  <button type="submit" className="btns mt-2 mb-2">Register</button>
  
</form>
 <Link to={"/login"} ><button className="btnl mt-2">Login</button></Link>
</div>

        </div>
        </div>
    );
};

export default Register;