import React, { useState } from 'react';
import './dashboardnav.css';
import { FaHome, FaTimes, FaUser, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SignOut from '../../auth/signout/signout.jsx';

const DashboardNav = () => {
    const navigate = useNavigate();

    // State to toggle mobile menu
    const [open, setOpen] = useState(true);
    const toggleMenu = () => setOpen(!open);

    // State to handle dropdown hover
    const [auth, setAuth] = useState(false);
    const mouseEnterAuth = () => setAuth(true);
    const mouseLeaveAuth = () => setAuth(false);

    // Sign out handler
    const handleSignOut = () => {
        SignOut();
        navigate('/');
    };

    return (
        <div className="navbar">

            {/* Title */}
            <div>
                <h1
                    style={{
                        paddingLeft: '40px',
                        margin: '20px',
                        textAlign: 'center',
                        color: 'yellow'
                    }}
                >
                    Task Nest
                </h1>
            </div>

            {/* Hamburger menu for mobile */}
            <div>
                <h2 className="hamberger" onClick={toggleMenu}>
                    {open ? <FaBars /> : <FaTimes />}
                </h2>
            </div>

            {/* Nav links */}
            <div className={`compressible ${open ? "toggle" : ''}`}>
                <div className="insidecompressible">
                    <ul className="list">
                        <li className="home">
                            <Link to="/">
                                <FaHome /> Home
                            </Link>
                        </li>

                        <li>
                            <a
                                className="parent"
                                onMouseEnter={mouseEnterAuth}
                                onMouseLeave={mouseLeaveAuth}
                            >
                                Tasks
                            </a>
                            <ul
                                className={`dropdown ${auth ? "show" : ""}`}
                                onMouseEnter={mouseEnterAuth}
                                onMouseLeave={mouseLeaveAuth}
                            >
                                <li className="eachtask">
                                    <Link to="/userroute">All Tasks</Link>
                                </li>
                                <li className="eachtask">
                                    <Link to="/addtask">
                                        <FaUser /> Add Tasks
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <Link to="/faq" style={{ textDecoration: "none", color: 'white' }}>
                            <li className="undone">FAQ</li>
                        </Link>
                    </ul>

                    {/* Sign out button */}
                    <button className="authenticate-sign-out" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;
