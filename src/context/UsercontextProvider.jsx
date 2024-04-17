
import createUsercontextdata from './Usercontex';
import axios from 'axios';
import React, { useEffect, useState ,useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const UsercontextProvider = ({children}) => {
    const [formdata,setformdata]=useState({
        user:"",
        name:"",
        completed:false
    })
    const [tasks,settasks]=useState([])
    const[completedtasks,setcompletedtasks]=useState([])
    const[isloading,setisloading]=useState(false)
    const[iseditting,setediting]=useState(false)
    const[taskID,settaskID]=useState("")
    

   
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [msgerro,setmsgerror]=useState("")
    


    const [loginemail,setloginemail]=useState("")
    const [loginpassword,setloginpassword]=useState("")
    const [result,setresult]=useState("")

      

    const [emailiID,setemaiID]=useState("")
    const [token,settoken]=useState("")
 



    const handlesubmitforregister= async(e)=>{
        e.preventDefault()
        await axios.post("https://taskmanagementapplication-backend.onrender.com/api/auth/signup",{name:username,email:email,password:password}).then((d)=>{
          if(d.request.status===200){
            toast.success(d.data.msg)
            setusername("")
            setemail("")
            setpassword("")
            setmsgerror("")
          }
            
        }).catch((dd)=>{
           toast.error(dd.response.data.msg)
        })
         
      }


 

    const {name}=formdata

    const handleinputchange=(e)=>{
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})

    }


 const gettask=async()=>{
    setisloading(true)
    try {
        
           const {data}=await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${emailiID}`,method:"get",headers:{ Authorization: token }})
        settasks(data);
        setisloading(false)
    } catch (error) {
        toast.warning("LOGIN YOUR MAIL-ID")
        setisloading(false)
    }
 }



 const handlesubmitforloginpage=async(e)=>{
    e.preventDefault()
    
     await axios.post("https://taskmanagementapplication-backend.onrender.com/api/auth/login",{email:loginemail,password:loginpassword}).then((d)=>{
        console.log(d);
        
        toast.success(d.data.msg)
        settoken(d.data.token)
        setemaiID(d.data.user._id)
        if(!emailiID==""){
            useEffect(()=>{
                gettask()
             },[])
        }
        setloginemail("")
        setloginpassword("")
        
     
    }).catch((e)=>{
        toast.error(e.response.data.msg);
        
    })
}



    const createtask=async(e)=>{
        e.preventDefault()
    
        if(name==""){
            return toast.warning("Please Enter Task Name")
        }
        else if(emailiID==""){
            return toast.warning("Login Your Mail Id")
        }
        try {
             await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks`,method:"post",data:{user:emailiID,name:formdata.name},headers:{ Authorization: token }}).then(()=>{
              toast.success("TASK created SUCCESSFULLY")
            })
            setformdata({...formdata,name:""})
            gettask()
        } catch (error) {
            toast.error("Try Again")
        }
    }


        const deletetask=async(id)=>{
            try {
                await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${id}`,method:"delete",headers:{ Authorization: token }}).then(()=>toast.success("TASK DELETED SUCCESSFULLY"))
                
                gettask()
            } catch (error) {
                toast.error("Try Again")

    }}


    useEffect(()=>{

        const ctask=tasks.filter((tasks)=>{
            return tasks.completed===true
        })
        setcompletedtasks(ctask)
    },[tasks])




    const getsingletetask=async(task)=>{

        setformdata({name:task.name,completed:false})
        settaskID(task._id)
        setediting(true)
    }

    const updatetask=async(e)=>{
        e.preventDefault()
    
        if(name==""){
            return toast.warning("Please Enter update task")
        }
        try {
            await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${taskID}`,method:"put",data:formdata,headers:{ Authorization: token }}).then(()=>toast.success("TASK UPDATED SUCCESSFULLY"))
          
            setformdata({...formdata,name:""})
            setediting(false)
            gettask()
            
        } catch (error) {
            toast.error("Try Again")
        }

    }

const setcomplete=async(task)=>{
    const newformdata={
        name:task.name,
        completed:true
    }

    try {
        await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${task._id}`,method:"put",data:newformdata,headers:{ Authorization: token }})
        
        toast.success("TASK COMPLETED SUCCESSFULLY")
        gettask()
    } catch (error) {
        toast.error("Try Again")
    }
}





    return (
        <>
       < createUsercontextdata.Provider    value={{formdata,setformdata,
        tasks,settasks,completedtasks,setcompletedtasks,isloading,setisloading,iseditting,setediting,
        name,handleinputchange,gettask,createtask,updatetask,deletetask,getsingletetask,setcomplete,
        username,setusername,email,setemail,password,setpassword,msgerro,setmsgerror,handlesubmitforregister,
        loginemail,loginpassword,result,setloginemail,setloginpassword,setresult,handlesubmitforloginpage}}>
         {children}
       </createUsercontextdata.Provider>
       <ToastContainer/>
       </>
    );
};

export default UsercontextProvider;