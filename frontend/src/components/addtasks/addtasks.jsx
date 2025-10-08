import React from 'react';
import './addtasks.css'
import Nav from '../home/nav/nav.jsx'
import { getAuth } from "firebase/auth";
import  {useState} from 'react'
import axios from 'axios'
import Preloader from '../preloader/preloader.jsx'
const auth = getAuth();
const AddTaskPage = () => {
    const email = auth.currentUser.email;
    const [title , settitle] = useState("");
    const [description , setdescription] = useState("");
    const [date , setdate] = useState("")
    const [priority, setpriority] = useState("")
    const [addloader,setaddloader] = useState(false);
    const completed = "i"
  const Add = async (e)=>{
    e.preventDefault();
    try{
    setaddloader(true)
    await axios.post("https://task-manager-xg41.onrender.com/api/addtask",{email, title,description,date,priority,completed})
    
    alert("successfully added to the tasks")
    // window.location.reload()
    settitle(""); setdescription("");setdate(""); setpriority("");
    }catch(err){alert("error ocuured when adding the task",err.message)}
    setaddloader(false)
  }
  return (
   
    <div>

    <h1 className = {`load ${addloader?'loading':""}`}><Preloader/></h1>
    <div className="add-task-container">
      <h1 className="add-task-heading">Add New Task</h1>

      <form className="add-task-form"
      onSubmit = {Add}>
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input type="text" id="title" 
          required
          placeholder="Enter task title"
          onChange = {(e)=>settitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" 
          required
          placeholder="Describe the task...by max of 100 words"
          onChange = {(e)=>setdescription(e.target.value)}></textarea>
        </div>

        <div className="form-group">
          <label for="dueDate">Due Date</label>
          <input type="date" id="dueDate"
          required
          onChange = {(e)=>setdate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority"
          required
          onChange = {(e)=>setpriority(e.target.value)}>
            <option value="">Select priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Add Task</button>
      </form>
    </div>
    </div>
  );
};

export default AddTaskPage;
