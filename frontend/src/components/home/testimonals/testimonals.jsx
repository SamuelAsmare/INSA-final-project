import React from 'react'
import './testimonals.css'
import image1 from "../../../assets/images.jpeg"
import image2 from "../../../assets/images (1).jpeg"
import image3 from "../../../assets/images.png"

const Testimonal = ()=>{
    return (
        <div className = "container">
            <h1 style={{textAlign:'center'}}>Testimonals</h1>
        <div className='testimonals'>
            <div className="eachtestimonal dawit">
              <div className='avaterco'>
                <img className = "avater" src = {image1}/>
                <h3> Dawit Lulie </h3>
              </div>
              
              
              <h4>fullstack web developer</h4>
              <p>My name is Dawit Lulie. I am currently working as a fullstack developer, and this website — Task Nest — makes me incredibly efficient in time management. It helps me stay focused, organized, and on top of my tasks every day.</p>
            </div>
            <div className="eachtestimonal dawit">
              <div className='avaterco'>
                <img className = "avater" src = {image2}/>
                <h3>Lidia Teshome</h3>
              </div>
              
              
              <h4>UI/UX Designer</h4>
              <p>Task Nest has completely changed how I manage my workflow. Its clean interface and deadline reminders keep my projects on track without any stress. I no longer miss important tasks — it's like having a personal assistant.</p>
            </div>
            <div className="eachtestimonal dawit">
              <div className='avaterco'>
                 <img className = "avater" src = {image3}/>
                <h3>Henok Alemu</h3>
              </div>
              
              
              <h4>fullstack web developer</h4>
              <p>As a project manager, juggling multiple team tasks used to be overwhelming. But with Task Nest, I can assign, track, and follow up on everything in one place. It has significantly improved our team’s productivity and communication.</p>
            </div>
          
           
        </div>
        </div>
    )
}

export default Testimonal