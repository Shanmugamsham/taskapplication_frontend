import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState ,useContext} from 'react';

import createUsercontextdata from '../context/Usercontex';
import { Link,useNavigate} from 'react-router-dom';
const Task = () => {
  const {formdata,setformdata,
    tasks,settasks,completedtasks,setcompletedtasks,isloading,setisloading,iseditting,setediting,
    name,handleinputchange,gettask,createtask,updatetask,deletetask,getsingletetask,setcomplete,isdata,setisdata,setemaiID,
    taskerro, setemail,setusername,setpassword,setmsgerror, setloginemail,setloginpassword}=useContext(createUsercontextdata)
  
   const [alltask,setalltask]=useState(true)
   const [record,setrecord]=useState(tasks)
  
   const nevigate=useNavigate()

        const logout=()=>{
          setemaiID("")
          setusername("")
          setemail("")
          setpassword("")
          setmsgerror("")
          setediting(false)
        setloginemail("")
        setloginpassword("")
          setisdata(false)
          nevigate('/')
          toast.success("Logout successfully")
        }

      

       const  filtersdata=(e)=>{
             setrecord(tasks.filter((f)=>f.name.toLowerCase().includes(e.target.value)))
             setalltask(false)
            
       }
  
    return (
        <div className='container-fluit'>
             
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TASK MANAGEMENT</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav loginpage">
            
          <Link to={"/"} >{isdata?"":<button className="btnh m-3" >Home</button>}</Link>
            <Link to={"/task"} >{isdata?<button className="btnh m-3"onClick={gettask} >Task</button>:""}</Link>
            <Link to={"/login"} >{isdata?"":<button className="btnh m-3" >Login</button>}</Link>
            <Link to={"/register"} >{isdata?"":<button className="btnh m-3" >SignUp</button>}</Link>
            {isdata?<button className="btnh m-3" onClick={logout}>Logout</button>:""}
           
          </div>
         
        </div>
      </div>
    </nav> 
          
            <div className="d-flex  flex-row justify-content-center ">
             <div className='bg-white p-3 rounded w-25'>
                <h2 className='heading mb-5 mt-2'>TASK MANAGEMENT</h2>
                     <form onSubmit={iseditting?updatetask:createtask}>
                             <div className="mb-3">
                                   <label htmlFor='title'><strong className='heading1'>Task Name :</strong></label>
                                        
                                         <input type="text"  value={name}  className="form-control rounded-0 mt-2" autoComplete='off' name='name' onChange={handleinputchange} />
                                         
                                
                                </div>
                     
                      <button type="submit" className="btns" onClick={()=> setalltask(true)}>{iseditting?(<span className="btnse">EDIT</span>
                        ):<span className="btns">ADD</span>}</button>
                       </form>
                     
                           </div>
                                 </div>
                                 <div id="emailHelp" className="message mb-3">{taskerro}</div>
                                 {
                                   isloading&&(<div className='d-flex justify-content-center loading '>
                                <h2>Loading......</h2>  
                                   </div>)
                                 }
                                  
                                     {
                                !isloading&&tasks.length===0?(<p className='foundmsg'>NO TASK FOUND</p>):(
                                   <>
                                    <div className='container d-flex  flex-row justify-content-between'>
                                      <p className='ttask m-3'>Total Task :{tasks.length}</p>
                                      <p className='tctask m-3 mb-5'>Completed Task: {completedtasks.length}</p>
                                      <input type="email" className="form-control inputforreach"  placeholder='Seach' onChange={filtersdata} />
                                      </div>
                                 

  { alltask?(<div>
  {tasks.map((task,index)=>(
   <div key={index} className='container d-flex  flex-row justify-content-between p-2'>
  
   <p className='indexs mt-'>N.o: {index+1}</p>
   <p className='taskname '>Task :              {task.name}</p>
   <div className='d-flex  justify-content-center'>
    <button  className="btncomplete" onClick={()=>setcomplete(task)}>{task.completed?"Completed":"Complete"}</button>
    <button  className="btnedit" onClick={()=>getsingletetask(task)}>Edit</button>
   <button  className="btndelete" onClick={()=>deletetask(task._id)}>Delete</button>
   </div>
 </div> 
 
))}
</div>):<div>
  {record.map((task,index)=>(
   <div key={index} className='container d-flex  flex-row justify-content-between p-2'>
  
   <h5 className='indexs mt-'>N.o: {index+1}</h5>
   <h5 className='taskname '>TASK:              {task.name}</h5>
   <div className='d-flex  justify-content-center'>
    <button  className="btncomplete" onClick={()=>setcomplete(task)}>{task.completed?"Completed":"Complete"}</button>
    <button  className="btnedit" onClick={()=>getsingletetask(task)}>Edit</button>
   <button  className="btndelete" onClick={()=>deletetask(task._id)}>Delete</button>
   </div>
 </div> 
 
))}
</div>}
  






                                    
                                    </>
                                )
                            }
           
            
        </div>
    );
};

export default Task;


