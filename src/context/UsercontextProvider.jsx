
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
    
    const[isloadinglogin,setisloadinglogin]=useState(false)
    const[isloadingregister,setisloadingresiter]=useState(false)

   
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [msgerro,setmsgerror]=useState("")
    


    const [loginemail,setloginemail]=useState("")
    const [loginpassword,setloginpassword]=useState("")
    const [result,setresult]=useState("")

      

    const [emailiID,setemaiID]=useState("")
    const [token,settoken]=useState("")
 
    
    const [erroeuemail,seterrmail]=useState("")
    const [erroeemailregister,seterremailregister]=useState("")

    const [isdata,setisdata]=useState(false)
    
    const [taskerro,settaskerro]=useState("")

    const handlesubmitforregister= async(e)=>{
        e.preventDefault()
     
          setisloadingresiter(true)
        await axios.post("https://taskmanagementapplication-backend.onrender.com/api/auth/signup",{name:username,email:email,password:password}).then((d)=>{
          if(d.request.status===200){
            toast.success(d.data.msg)
            setusername("")
            setemail("")
            setpassword("")
            setmsgerror("")
            setisloadingresiter(false)
            seterremailregister("")
          }
            
        }).catch((dd)=>{
           seterremailregister(dd.response.data.msg)
           setisloadingresiter(false)
        })
         
      }


 

    const {name}=formdata

    const handleinputchange=(e)=>{
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})

    }



 const handlesubmitforloginpage=async(e)=>{
    e.preventDefault()
    setisloadinglogin(true)
     await axios.post("https://taskmanagementapplication-backend.onrender.com/api/auth/login",{email:loginemail,password:loginpassword}).then((d)=>{
        setisdata(true)
        
        toast.success(d.data.msg)
        settoken(d.data.token)
        setemaiID(d.data.user._id)
        setisloadinglogin(false)
        
        setloginemail("")
        setloginpassword("")
        seterrmail("")
         settaskerro("")
    }).catch((e)=>{
        seterrmail(e.response.data.msg)
      
        setisloadinglogin(false)
        
    })
}

const gettask=async()=>{
    setisloading(true)
    try {
        
           const {data}=await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${emailiID}`,method:"get",headers:{ Authorization: token }})
        settasks(data);
        setisloading(false)
    } catch (error) {
        toast.error("SERVER ERRO")
        setisloading(false)
        
    }
 }




    const createtask=async(e)=>{
        e.preventDefault()
         
        setisloading(true)
        if(name==""){
             settaskerro("Please Enter Task Name")
             setisloading(false)
        }else{
        try {
             await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks`,method:"post",data:{user:emailiID,name:formdata.name},headers:{ Authorization: token }}).then(()=>{
              toast.success("TASK CREATED SUCCESSFULLY")
              setisloading(false)
              settaskerro("")
            })
            setformdata({...formdata,name:""})
            gettask()
        } catch (error) {
            settaskerro("Login your gmail ")
            setisloading(false)
        }
    }
    }


        const deletetask=async(id)=>{
            setisloading(true)
          
            try {
                await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${id}`,method:"delete",headers:{ Authorization: token }}).then(()=>toast.success("TASK DELETED SUCCESSFULLY"))
                
                gettask()
            } catch (error) {
                toast.error("Try Again")
                setisloading(false)

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
        setisloading(true)
        
        e.preventDefault()
    
        if(name==""){
         toast.warning("Please Enter update task")
            setediting(false)
        }
        else{
        try {
            await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${taskID}`,method:"put",data:formdata,headers:{ Authorization: token }}).then(()=>toast.success("TASK UPDATED SUCCESSFULLY"))
            
            setformdata({...formdata,name:""})
            setediting(false)
            gettask()
            setisloading(false)
        } catch (error) {
            toast.error("Try Again")
            setisloading(false)
        }
    }

    }

const setcomplete=async(task)=>{
    setisloading(true)
    const newformdata={
        name:task.name,
        completed:true
    }

    try {
        await axios({url:`https://taskmanagementapplication-backend.onrender.com/api/tasks/${task._id}`,method:"put",data:newformdata,headers:{ Authorization: token }})
        
        toast.success("TASK COMPLETED SUCCESSFULLY")
        gettask()
        setisloading(false)
    } catch (error) {
        toast.error("Try Again")
        setisloading(false)
    }
}





    return (
        <>
       < createUsercontextdata.Provider    value={{formdata,setformdata,
        tasks,settasks,completedtasks,setcompletedtasks,isloading,setisloading,iseditting,setediting,
        name,handleinputchange,gettask,createtask,updatetask,deletetask,getsingletetask,setcomplete,
        username,setusername,email,setemail,password,setpassword,msgerro,setmsgerror,handlesubmitforregister,
        loginemail,loginpassword,result,setloginemail,setloginpassword,setresult,handlesubmitforloginpage,isloadinglogin,
        isloadingregister,erroeemailregister,erroeuemail,isdata,setisdata,setemaiID,taskerro}}>
         {children}
       </createUsercontextdata.Provider>
       <ToastContainer/>
       </>
    );
};

export default UsercontextProvider;