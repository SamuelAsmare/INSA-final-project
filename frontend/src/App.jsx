import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import UserPage from './components/alltasks/alltasks.jsx';
import AddTaskPage from './components/addtasks/addtasks.jsx';
import Login from './components/auth/login/login.jsx';
import Signup from './components/auth/signup/signup.jsx';
import Reset from './components/auth/resetpassword/reset.jsx';
import ProtectedLayout  from'./components/auth/protected/protected.jsx'
import Dashboard from './components/dashbord/dashboard.jsx'
import Faq from './components/faq/faq.jsx'
import About from './components/About/about.jsx'
const App = () => {
  return (

// <div></div>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/about" element={<About />} />
        {/* Protected routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/userroute" element={<UserPage />} />
          <Route path="/addtask" element={<AddTaskPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<div style={{color:"black"}}>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
