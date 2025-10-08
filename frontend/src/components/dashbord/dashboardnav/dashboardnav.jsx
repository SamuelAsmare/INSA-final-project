import React from 'react'
import './dashboardnav.css'
import {useState} from 'react';
import {FaHome ,FaTimes, FaUser , FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SignOut from '../../auth/signout/signout.jsx'
import {useNavigate} from 'react-router-dom'
const DashboardNav = ()=>{
    const navigate = useNavigate();
    const [open , setopen] = useState(true);
    const togglemenu=()=>setopen(!open);
    const [auth , setauth] = useState(false);
       const mouseenterauth=()=>setauth(true);
    const mouseleaveauth=()=>setauth(false);

    const HandleSignOut = ()=>{
        SignOut()
        navigate('/')
    }
return(    
    <div className="navbar">
        {/* title */}
        <div>
            <h1 style={{paddingLeft: '40px' , 
            margin : '20px' ,
             textAlign : "center",
             color:"yellow"}}>Task Nest</h1>
        </div>
       {/* nav bars  */}
       <div>
        <h2 className='hamberger' onClick={togglemenu}>{open?<FaBars/> : <FaTimes/>}</h2>
       </div>
<div className = {`compressible  ${open? "toggle" : ''}`}>
     <div className = "insidecompressible">
        <ul className = "list">
                        <li className = 'home '>
                            <Link to = "/">
                            <FaHome/>Home</Link></li>
                        <li ><a className = 'parent'  
                                onMouseEnter = {mouseenterauth} 
                                onMouseLeave={mouseleaveauth} 
                             >Tasks</a>
                            <ul className = {`dropdown ${auth? "show":""}` } 
                                onMouseEnter = {mouseenterauth} 
                                onMouseLeave={mouseleaveauth}>
                                    <li className = 'eachtask'>
                                        <Link to = "/userroute">
                                        all tasks</Link></li>
                                    <li className = 'eachtask'>
                                        <Link to = "/addtask" >
                                        <FaUser/> add tasks </Link></li>
                            </ul>
                        </li>
                        <li> 
                            <Link to ="/about">
                             About
                            </Link>
                        </li>
                      <Link  to ="/faq" 
                        style={{textDecoration:"none",color:'white'}}>
                        <li className = "undone">FAQ
                        </li></Link> 
        </ul>
       <button className='authenticate-sign-out' 
       onClick={HandleSignOut}> 
       sign out</button>
        </div>
        </div>
    </div>
) }
export default DashboardNav