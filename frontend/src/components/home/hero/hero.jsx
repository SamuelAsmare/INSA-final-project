import React from 'react'
import "./hero.css"

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import {Link } from 'react-router-dom'
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ['Completed', 'Pending', 'In Progress'],
    datasets: [
      {
        label: 'Tasks',
        data: [10, 5, 8],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };


const Hero = ()=>{
    return (
        <div className = 'herobox'>
           <section className = 'heroleft'>
            <h1 className = 'herotitle'>
                Build your every day tasks , plan , manage your time.
            </h1>
            <h2 className = 'herosubtitle'>A simple yet powerful task manager to help you plan, track, and finish your work efficiently.</h2>
            <section className='buttons'>
                <Link to='/login'><button className = 'getstar'>get started</button></Link>
                <Link to ="/about"><button className = 'learnmor'>learn more</button></Link>
            </section>
            
           </section>
           <section className="heroright">
            <div className='pie'>
               <Pie data={data} />
            </div>
            <div class='graph'>
              <h4>🚀Completed</h4>
              <h4>🚀Pending</h4>
              <h4>🚀In progress</h4>
            </div>
            
           </section>           
        </div>
    )
}

export default Hero





//  <div className = "herotasks">
//               <h2>1000+ users</h2>
//               <button>learn more </button>
//              </div>
//              <div className = "herotasks">
//               <h2>Free Forever</h2>
//               <button>learn more </button>
//              </div>
//              <div className = "herotasks">
//               <h2>one task done</h2>
//               <button>learn more </button>
//              </div>