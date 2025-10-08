import React, { useState } from 'react';
import './addtasks.css';
import Nav from '../home/nav/nav.jsx';
import { getAuth } from "firebase/auth";
import axios from 'axios';
import Preloader from '../preloader/preloader.jsx';

const auth = getAuth(); // Get Firebase Auth instance

const AddTaskPage = () => {
    const email = auth.currentUser.email; // Current logged-in user's email

    // State variables for form inputs
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [date, setdate] = useState("");
    const [priority, setpriority] = useState("");
    const [addloader, setaddloader] = useState(false); // Loader for async request
    const completed = "i"; // Default value for completed status

    // Function to handle task addition
    const Add = async (e) => {
        e.preventDefault(); // Prevent form default submission

        try {
            setaddloader(true); // Show preloader

            // Send POST request to add the task
            await axios.post(
                "https://task-manager-xg41.onrender.com/api/addtask",
                { email, title, description, date, priority, completed }
            );

            alert("Successfully added to the tasks");

            // Reset form fields after successful submission
            settitle(""); 
            setdescription("");
            setdate(""); 
            setpriority("");

        } catch (err) {
            alert("Error occurred when adding the task: " + err.message);
        }

        setaddloader(false); // Hide preloader
    };

    return (
        <div>
            {/* Preloader shown when addloader is true */}
            <h1 className={`load ${addloader ? 'loading' : ""}`}>
                <Preloader />
            </h1>

            <div className="add-task-container">
                <h1 className="add-task-heading">Add New Task</h1>

                {/* Form to add a new task */}
                <form className="add-task-form" onSubmit={Add}>

                    {/* Task Title input */}
                    <div className="form-group">
                        <label htmlFor="title">Task Title</label>
                        <input 
                            type="text" 
                            id="title"
                            required
                            placeholder="Enter task title"
                            onChange={(e) => settitle(e.target.value)} 
                        />
                    </div>

                    {/* Task Description input */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            id="description"
                            required
                            placeholder="Describe the task...by max of 100 words"
                            onChange={(e) => setdescription(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Due Date input */}
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date</label>
                        <input 
                            type="date" 
                            id="dueDate"
                            required
                            onChange={(e) => setdate(e.target.value)} 
                        />
                    </div>

                    {/* Priority selection */}
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select 
                            id="priority"
                            required
                            onChange={(e) => setpriority(e.target.value)}
                        >
                            <option value="">Select priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="submit-button">Add Task</button>

                </form>
            </div>
        </div>
    );
};

export default AddTaskPage;
