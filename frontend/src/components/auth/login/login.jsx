import React from 'react'
import { useState } from 'react'
import './login.css'
import Nav from '../../home/nav/nav.jsx'
import { Link } from 'react-router-dom'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Preloader from "../../preloader/preloader.jsx"

const Login = () => {
    // State variables for form inputs and loader
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loader, setloader] = useState(false);

    const navigate = useNavigate();

    // Function to handle sign-in
    const signin = async (e) => {
        const online = navigator.onLine; // Check if user is online
        e.preventDefault(); // Prevent default form submission

        if (!online) {
            alert('Please first connect to internet');
            return
        }

        setloader(true); // Show loader while processing

        const exist = await fetchSignInMethodsForEmail(auth, email); // Check if email exists

        try {
            // Sign in with Firebase authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if email is verified
            if (!user.emailVerified) {
                alert("Please verify your email before logging in.");
                return;
            }

            // Navigate to dashboard after successful login
            navigate("/dashboard");

            // Add user to backend database if not already present
            await axios.post('https://task-manager-xg41.onrender.com/api/addusers', { email });

        } catch (error) {
            // Handle errors during login
            if (exist.length === 0) {
                alert("User does not exist");
            } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
                alert("Invalid email or password");
            } else {
                alert("Login failed: " + error.message);
            }
        }

        setloader(false); // Hide loader after process ends
    }

    return (
        <div>
            {/* Navigation bar */}
            <Nav />

            {/* Preloader while signing in */}
            <h1 className={`preload ${loader ? 'preloading' : ""}`}><Preloader /></h1>

            <div className='loginpage'>
                <div className='login'>
                    <form className='form' onSubmit={signin}>
                        <h1>Sign in to your account</h1>

                        {/* Email input section */}
                        <section className='emailsection'>
                            <label htmlFor="emai">Email :</label>
                            <input
                                id="emai"
                                type='email'
                                className='email'
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </section>

                        {/* Password input section */}
                        <section className='passwordsection'>
                            <label htmlFor='password'>Password :</label>
                            <input
                                id="password"
                                type='password'
                                className='email'
                                placeholder="********"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </section>

                        {/* Submit button */}
                        <button type='submit' id="login" className="button">Log in</button>

                        {/* Links for forgot password and sign up */}
                        <section className='emailsection'>
                            <Link to="/reset" className='forgot'><p> Forgot password? </p></Link>
                            <h3><Link to='/signup' className='login-sign-up'>Sign up</Link></h3>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
