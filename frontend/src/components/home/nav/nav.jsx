import React from 'react'
import './nav.css'
import {useState} from 'react';
import {FaHome ,FaTimes, FaUser , FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SignOut from '../../auth/signout/signout.jsx'
const Nav = ()=>{
    const [open , setopen] = useState(true);

    const togglemenu=()=>setopen(!open);
    const [auth , setauth] = useState(false);
       const mouseenterauth=()=>setauth(true);
    const mouseleaveauth=()=>setauth(false);

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
                        <li className = 'home '><Link to = "/"><FaHome/>Home</Link></li>
                        <li> <Link to ="/dashboard"> Dashboard</Link></li>
                        <li> 
                            <Link to ="/about">
                             About
                            </Link>
                        
                        </li>
            <li ><a className = 'parent'  
            onMouseEnter = {mouseenterauth} 
            onMouseLeave={mouseleaveauth} 
            >Enter</a>
            <ul className = {`dropdown ${auth? "show":""}` } 
                onMouseEnter = {mouseenterauth} 
                onMouseLeave={mouseleaveauth}>
                    <li className = 'eachtask'><Link to = "/signup">signUp </Link></li>
                    <li className = 'eachtask'><Link to = "/login" ><FaUser/> Login </Link></li>
             </ul>
            </li>
           <Link  to ="/faq" style={{textDecoration:"none",color:'white'}}><li className = "undone">FAQ
             </li></Link> 
        </ul>
        <div className = "authentication">
            <Link to = "/signup" ><button className='authenticate'> sign up</button></Link>
            <Link to ='/login'><button className='authenticate loginbut'>log in</button></Link>
        </div>
        </div>
        </div>
    </div>
) 
}

export default Nav