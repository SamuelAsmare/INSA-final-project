import './about.css'
import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// About page component for TaskNest
const About = () => {
  return (       
    <div className="aboutpage">
      <div className="container">

        {/* Title section with platform name and description */}
        <section className="title_section">  
          <h1 className="title"> TaskNest</h1>
          <p className="title_description">
            A smart and intuitive task manager platform built to help individuals and teams stay organized, boost productivity, and manage time efficiently.
          </p>
        </section>

        {/* Overview section explaining platform features */}
        <section className="overview">
          <h2 className="section_title">Platform Overview</h2>
          <p className="overview_text">
            TaskNest provides a clean and efficient interface for tracking tasks, setting deadlines, collaborating with teams, and maintaining productivity habits. Whether you're managing personal to-dos or leading a project, TaskNest adapts to your workflow.
          </p>
        </section>

        {/* Target users section */}
        <section className="targetusers">
          <h2 className="section_title">Target Users</h2>
          <div className="userslist">
            <div className="usertype">Students</div>
            <div className="usertype">Professionals</div>
            <div className="usertype">Project Teams</div>
          </div>
          <p style={{marginTop: '30px', fontSize: '1.1rem', opacity: '0.9'}}>
            Ideal for anyone looking to organize tasks, improve productivity, and collaborate smoothly.
          </p>
        </section>

        {/* Platform information section */}
        <section className="platforminfo">
          <h2 className="section_title">Platform Information</h2>
          <p className="overview_text">
            TaskNest is a responsive web application accessible on desktop, tablet, and mobile browsers. The platform is built for speed, simplicity, and usability—no app installation required.
          </p>
        </section>

        {/* Platform constraints section */}
        <section className="constraintssection">
          <h2 className="platformtitle">Platform Constraints</h2>
          <ul className="constraintslist">
            <li>
              <strong>Message Limits:</strong> Group chats are limited to a maximum of 200 messages per project to maintain performance.
            </li>
            <li>
              <strong>Notification Frequency:</strong> To avoid overload, reminder notifications are sent based on your notification settings.
            </li>
            <li>
              <strong>Offline Access:</strong> Limited features are available offline; full functionality requires internet connectivity.
            </li>
          </ul>
        </section>

        {/* Call-to-action section for users to join/start using the platform */}
        <section className="joincommunity">
          <h2 className="joincommunity_title">Ready to Boost Your Productivity?</h2>
          <h4>Start using TaskNest today and take control of your time, tasks, and teamwork!</h4>
        </section>
      </div>
    </div>
  )
}

export default About
