import React from 'react';
import './dashboard.css';
import CustomDashboardNav from './dashboardnav/dashboardnav.jsx'
import Contact from '../home/contact/contact.jsx'
import Testimonal from '../home/testimonals/testimonals.jsx'
import Records from '../home/records/records.jsx'
import UserProfile from '../dashbord/userprofile/userprofile.jsx'
const Dashboard = () => {
  return (
    <div>
      <CustomDashboardNav/>
      <UserProfile/>
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Dashboard</h1>
      <div className="dashboard-cards">

        <div className="card">
          <h2>Completed</h2>
          <p>You have completed 5 tasks today</p>
        </div>

        <div className="card">
          <h2>Tasks</h2>
          <p>You have 5 tasks due today</p>
        </div>

        <div className="card">
          <h2>Added Tasks</h2>
          <p>You have add 5 tasks today</p>
        </div>


        <div className="card">
          <h2>Total Tasks</h2>
          <p>3 new messages</p>
        </div>

        <div className="card">
          <h2>Undone</h2>
          <p>2 Undone tasks</p>
        </div>
        
      </div>
    </div>
    <Contact/>
    </div>
  );
};

export default Dashboard;
