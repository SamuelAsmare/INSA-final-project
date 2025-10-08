import { useState,useEffect} from "react";
import "./alltasks.css";
import axios from 'axios'
import Nav from "../home/nav/nav.jsx";
import {getAuth} from 'firebase/auth'
import Preloader from '../preloader/preloader.jsx'

const UserPage = () => {

  const [tasks, setTasks] = useState([]);
  const [delloader,setdelloader] = useState(false)
  const [fetloader,setfetloader] = useState(false)
  const user = getAuth().currentUser
  useEffect(()=>{
   const Fetch = async ()=>{
    try{
    setfetloader(true)
    const result = await axios.get(`https://task-manager-xg41.onrender.com/api/gettasks/${user.email}`) 
    setTasks(result.data);
    }catch(err){"alert error when fetching the data",err.message}
    setfetloader(false)    }
    
    Fetch();
  },[])

  const DeleteTask = async (id)=>{
   try{
    setdelloader(true)
    await axios.delete(`https://task-manager-xg41.onrender.com/api/deletetask/${id}`)
    alert("Your data deleted successfully")
   }catch(error){alert("Error Ocured when deleting the task" , error.message)}
   setdelloader(false)
  }
 
  return (
    <div className="taskpage">
      <h1 className = {`delload ${delloader?'delloading':""}`}><Preloader/></h1>
      <h1 className = {`fetload ${fetloader?'fetloading':""}`}><Preloader/></h1>
      <div className="user-page">
        <h2 className="subheading">📝 My Tasks</h2>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="eachfield">
              <h3 className="taskname">
                {task.completed=='c' && "✔️"} {task.title}
              </h3>

              <p className="taskdiscription">{task.description}</p>

              <div className="dateAndpriority">
                <h3 className="priority">{task.priority}</h3>
                <h3 className="duedate">{task.duedate.split("T")[0]}</h3>
              </div>

              <div className="completed-delete-buttons">
                <button
                  className="completebutton"
                >
                  {task.completed=="c"? "Completed" : "Incomplete"}
                </button>

                <button className="deletebutton"
                onClick = {()=>DeleteTask(task.id)}>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
