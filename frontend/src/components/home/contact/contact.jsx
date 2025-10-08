import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; 
import './contact.css'
const Contact = ()=>{
    return(
        <div className = "contact">
            
                <h1 style={{textAlign:'center' , width:'100%'}}> Contact Us</h1>
            
           <div className = 'contactus'>
              <h3>Creating Creating innovative digital solutions with a focus on user experience and performance.</h3>
              <p className = "phone"><FaEnvelope/> phone:  +(251) 928210736</p>
              <p className = "email"><FaPhoneAlt/> Email: samuelasmare19@gmail.com</p>
              <p className = "location"><FaMapMarkerAlt/> Location: Addis Ababa, Ethiopia</p>
           </div>
           <div className = 'contactus quicklinks'>
            <h2>Quick Links</h2>
            <h3>Home</h3>
            <h3>Overview</h3>
            <h3>Testimonals</h3>
            
           </div>
           <div className = 'contactus socialmedias'>
              <h2>Social Medias</h2>
               <div className = 'collections'>
               <a href ="#" className='eachmedia'> < FaLinkedin/> </a>
               <a href ="#" className='eachmedia'> <SiLeetcode/>  </a>
               <a href ="#" className='eachmedia'><FaGithub/>  </a>
               <a href ="#" className='eachmedia'><FaTelegram/> </a>
               </div>
           </div>
           <div className = 'contactus newsleter'>
              <h2>Newsletter</h2>
              <p>Subscribe to receive updates and news.</p>
              <div className = "emailandbutton">
              <form>
                <input type = 'email' placeholder = 'Enter your email' className = 'input'></input>
                <input type='submit' className = 'submitbutton input'></input>
              </form>
              </div>
           </div>
        </div>
    )
}

export default Contact