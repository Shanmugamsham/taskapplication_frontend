
import React, { useEffect, useState ,useContext} from 'react';

import createUsercontextdata from '../context/Usercontex';
import { Link,} from 'react-router-dom';
const Task = () => {
   
    const {formdata,setformdata,
        tasks,settasks,completedtasks,setcompletedtasks,isloading,setisloading,iseditting,setediting,
        name,handleinputchange,gettask,createtask,updatetask,deletetask,getsingletetask,setcomplete }=useContext(createUsercontextdata)



    return (
        <div>
            
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TASK</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav loginpage">
            
          <Link to={"/"} ><button className="btnh m-3 " >Home</button></Link>
            <Link to={"/task"} ><button className="btnh m-3 " onClick={gettask} >Task</button></Link>
            <Link to={"/login"} ><button className="btnh m-3" >Login</button></Link>
            <Link to={"/register"} ><button className="btnh m-3 ">SignUp</button></Link>
           
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
                     
                      <button type="submit" className="btns">{iseditting?(<span className="btnse">EDIT</span>
                        ):<span className="btns">ADD</span>}</button>
                       </form>
                           </div>
                                 </div>
                                 {
                                   isloading&&(<div className='d-flex justify-content-center '>
                                <h2>loading......</h2>  
                                   </div>)
                                 }
                                     {
                                !isloading&&tasks.length===0?(<p className='foundmsg'>NO TASK FOUND</p>):(
                                   <>
                                    <div className='container d-flex  flex-row justify-content-between'>
                                      <p className='ttask'>Total Task :{tasks.length}</p>
                                      <p className='tctask'>Completed Task: {completedtasks.length}</p>
                                      </div>
  <div className='container d-flex  flex-row justify-content-center'>                                
<table >
  <tr>
    <th>No</th>
    <th>Task Name</th>
    <th>Task Complition</th>
    <th>Edit Task</th>
    <th>Delete Task</th>
    
  </tr>
  {tasks.map((task,index)=>(
   <tr key={index}>

   <td><span className='indexs'>{index+1}</span></td>
   <td className='taskname'>{task.name}</td>
   <td> <button  className="btncomplete" onClick={()=>setcomplete(task)}>{task.completed?"Completed":"Complete"}</button> </td>
   <td> <button  className="btnedit" onClick={()=>getsingletetask(task)}>Edit</button></td>
   <td><button  className="btndelete" onClick={()=>deletetask(task._id)}>Delete</button></td>
 </tr> 

  ))}
 
  
</table>
</div>   





                                    
                                    </>
                                )
                            }
           
            
        </div>
    );
};

export default Task;


// headers: { Authorization: authState.token }