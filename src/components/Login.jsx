
import React from 'react';
import {useContext} from 'react';
import createUsercontextdata from '../context/Usercontex';
import { Link,useNavigate} from 'react-router-dom';
const Login = () => {

    const { loginemail,loginpassword,result,setloginemail,setloginpassword,setresult,handlesubmitforloginpage,
      gettask,isloadinglogin,erroeuemail,tasks,isdata,setisdata}=useContext(createUsercontextdata)
      const nevigate=useNavigate()

      const logout=()=>{
        setisdata(false)
        nevigate('/')
      }

    return (

        <div>
               
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TASK MANAGEMENT</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav loginpage">
            
            <Link to={"/"} >{isdata?"":<button className="btnh m-3" >Home</button>}</Link>
            <Link to={"/task"} >{isdata?<button className="btnh m-3" onClick={gettask}>Task</button>:""}</Link>
            <Link to={"/login"} >{isdata?"":<button className="btnh m-3" >Login</button>}</Link>
            <Link to={"/register"} >{isdata?"":<button className="btnh m-3" >SignUp</button>}</Link>
            {isdata?<button className="btnh m-3" onClick={logout}>Logout</button>:""}
            </div>
           
          </div>
        </div>
      </nav> 

   



        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
              
       
        <div className='bg-white p-3 rounded w-25'>
            <h2 className='heading'>Login</h2>
       <form onSubmit={handlesubmitforloginpage}>
<div className="mb-3">
<label htmlFor='email'><strong>Email:</strong></label>
<input type="email" className="form-control rounded-0" autoComplete='off' name='email' value={loginemail} onChange={(e)=>setloginemail(e.target.value)} required/>
</div>
<div className="mb-3">
<label htmlFor='password'><strong>Password:</strong></label>
<input type="password" className="form-control rounded-0" autoComplete='off' name='password' value={loginpassword} onChange={(e)=>setloginpassword(e.target.value)} required/>
</div>
<div id="emailHelp" className="message mb-3">{erroeuemail}</div>
{
  isloadinglogin&&(<div className='d-flex justify-content-center loading '>
  <h2>Loading....</h2>  
  </div>)
                  }

<button type="submit" className="btns">Login</button>

</form>
<Link to={"/register"} ><button className="btnl mt-2">Sign up</button></Link>

</div>
    </div>
    </div>
    );
};

export default Login;