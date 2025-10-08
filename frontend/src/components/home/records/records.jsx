import React from 'react'
import "./records.css"
import {Link} from 'react-router-dom'

  const record = [
    {title : "100 + users" , description :"These users manage their time effectively with our intuitive task system." },
    {title : "1,500+ Tasks Created" , description :"Helping users plan, track, and complete thousands of tasks every day." },
    {title : "95% User Satisfaction" , description :"" },
    {title : "100 + users" , description :"Most of our users report increased productivity and less stress." },
    {title : "100% Free to Use" , description :"No hidden charges access all features without a credit card." },
    {title : "Cross-Platform Access" , description :"	Use it anywhere on mobile, desktop, or tablet." },
  ]
  

const Records = ()=>{
    return (
        <div className="recordscomponent">
            <h1 style={{color:'black' , textAlign:"center"}}>Overview</h1>
         <div className = 'records'>
           {record.map((rec,index)=>(
            <div key = {index} className = "eachrecord">
             <h2 className="records-title">{rec.title}</h2>
             <h3 className='records-title-description'>{rec.description}</h3>
             <Link to="/about"><button className="button">learn more</button></Link>
            </div>
           ))}
         </div>
        </div>
    )
}

export default Records