import { useState, useEffect } from "react";
import "./alltasks.css";
import axios from 'axios';
import Nav from "../home/nav/nav.jsx";
import { getAuth } from 'firebase/auth';
import Preloader from '../preloader/preloader.jsx';

const UserPage = () => {

  // State to store tasks fetched from backend
  const [tasks, setTasks] = useState([]);
  // Loader state for deleting a task
  const [delloader, setdelloader] = useState(false);
  // Loader state for fetching tasks
  const [fetloader, setfetloader] = useState(false);
  
  const user = getAuth().currentUser; // Get currently logged-in user

  // Fetch tasks from backend when component mounts
  useEffect(() => {
    const Fetch = async () => {
      try {
        setfetloader(true); // Start fetch loader
        const result = await axios.get(`https://task-manager-xg41.onrender.com/api/gettasks/${user.email}`);
        setTasks(result.data); // Set fetched tasks to state
      } catch (err) {
        alert("Error when fetching the data", err.message);
      }
      setfetloader(false); // Stop fetch loader
    }
    
    Fetch();
  }, []);

  // Function to delete a task by its ID
  const DeleteTask = async (id) => {
    try {
      setdelloader(true); // Start delete loader
      await axios.delete(`https://task-manager-xg41.onrender.com/api/deletetask/${id}`);
      alert("Your data deleted successfully");
    } catch (error) {
      alert("Error occurred when deleting the task", error.message);
    }
    setdelloader(false); // Stop delete loader
  }

  return (
    <div className="taskpage">
      {/* Preloader for delete operation */}
      <h1 className={`delload ${delloader ? 'delloading' : ""}`}><Preloader /></h1>
      {/* Preloader for fetch operation */}
      <h1 className={`fetload ${fetloader ? 'fetloading' : ""}`}><Preloader /></h1>
      
      <div className="user-page">
        <h2 className="subheading">📝 My Tasks</h2>

        {/* Task list */}
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="eachfield">
              {/* Task title with completed icon */}
              <h3 className="taskname">
                {task.completed === 'c' && "✔️"} {task.title}
              </h3>

              {/* Task description */}
              <p className="taskdiscription">{task.description}</p>

              {/* Task priority and due date */}
              <div className="dateAndpriority">
                <h3 className="priority">{task.priority}</h3>
                <h3 className="duedate">{task.duedate.split("T")[0]}</h3>
              </div>

              {/* Buttons for marking complete and deleting task */}
              <div className="completed-delete-buttons">
                <button className="completebutton">
                  {task.completed === "c" ? "Completed" : "Incomplete"}
                </button>

                <button className="deletebutton" onClick={() => DeleteTask(task.id)}>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
