import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from './nav/nav.jsx'
import Contact from "./contact/contact.jsx"
import Login from '../auth/login/login.jsx' 
import Signup from '../auth/signup/signup.jsx'
import UserPage from '../alltasks/alltasks.jsx'
import AddTaskPage from '../addtasks/addtasks.jsx'
import HRT from './HRT.jsx'

const Home = ()=>{
    return (
    <div style={{display : "flex",gap:"0px",flexDirection : "column"}}>
     <Nav/>

     <HRT/>

     <section className="content_section">
          <h2 className="section_title">Core Features</h2>
          <div className="features_grid">

            <div className="featurecards">
              <h3 className="feature_title">🔐 User Accounts & Profiles</h3>
              <p className="feature_description">
                Secure login and personalized user profiles for managing tasks across devices.
              </p>
              <ul className="feature_list">
                <li>Email and social account login</li>
                <li>Personal task dashboard</li>
                <li>Customizable settings</li>
              </ul>
            </div>

            <div className="featurecards">
              <h3 className="feature_title">📅 Smart Task Scheduling</h3>
              <p className="feature_description">
                Organize your day with daily, weekly, and monthly task planning tools.
              </p>
              <ul className="feature_list">
                <li>Recurring task options</li>
                <li>Due date reminders</li>
                <li>Calendar integration</li>
              </ul>
            </div>

            <div className="featurecards">
              <h3 className="feature_title">💬 Team Collaboration</h3>
              <p className="feature_description">
                Communicate with teammates and coordinate tasks efficiently in shared spaces.
              </p>
              <ul className="feature_list">
                <li>Real-time group messaging</li>
                <li>Task assignment</li>
                <li>Project-specific channels</li>
                <li>Member activity tracking</li>
              </ul>
            </div>

            <div className="featurecards">
              <h3 className="feature_title">📈 Productivity Tracking</h3>
              <p className="feature_description">
                Visualize your progress with performance metrics and productivity charts.
              </p>
              <ul className="feature_list">
                <li>Task completion stats</li>
                <li>Weekly productivity summaries</li>
                <li>Goal-setting and tracking</li>
              </ul>
            </div>

            <div className="featurecards">
              <h3 className="feature_title">👥 Project Management Tools</h3>
              <p className="feature_description">
                Manage teams and projects with powerful tools for organization and control.
              </p>
              <ul className="feature_list">
                <li>Role-based permissions</li>
                <li>Project timelines</li>
                <li>Team workload balancing</li>
                <li>Progress overview boards</li>
              </ul>
            </div>

            <div className="featurecards">
              <h3 className="feature_title">🏆 Achievement System</h3>
              <p className="feature_description">
                Stay motivated with milestone achievements and productivity badges.
              </p>
              <ul className="feature_list">
                <li>Daily streak rewards</li>
                <li>Task completion trophies</li>
                <li>Personalized productivity badges</li>
              </ul>
            </div>
          </div>
       // </section>
     <Contact/>
    
    </div>
    )
}
    
export default Home