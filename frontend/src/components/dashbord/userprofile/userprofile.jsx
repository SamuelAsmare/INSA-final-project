import React from 'react';
import './userprofile.css';
 import avatar from '/images.jpeg'
import { getAuth } from "firebase/auth";
const auth = getAuth();
// import avatar from '../../../assets/images.jpeg'
const UserProfile = () => {

const user = auth.currentUser;

  return (
    <div className="profile-container">
     
        <div className="profile-card" >
        <img src={avatar} alt="Profile" className="profile-avatar" />
        <h2 className="profile-name">{user.email}</h2>
        <p className="profile-email">Your Profile</p>
      </div>
        
      <div className='welcome-text-div'>
       <h1>Hello!!  Welcome to your profile </h1>
       <h3> 🚀 Small steps every day lead to big changes.</h3>
       <h3> 🚀 Discipline is the bridge between goals and accomplishment.</h3>
       <h3> 🚀 Success is the sum of small efforts repeated day in and day out.</h3>
      </div>
    </div>
  );
};

export default UserProfile;
