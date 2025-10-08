import React from 'react'
import { useState, useEffect } from 'react'
import './signup.css'
import Nav from '../../home/nav/nav'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.js";
import Preloader from '../../preloader/preloader.jsx'

const Signup = () => {
    // State variables
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Confirm, setconfirm] = useState('');
    const [loading, setloading] = useState(false);
    const [MatchStatus, setMatchStatus] = useState('');   

    // Function to check if password and confirm password match
    const check = () => {
        if (Confirm === "" || password === "") {
            setMatchStatus('Please Fill both password fields');
            return true;
        } else if (Confirm !== password) {
            setMatchStatus('Password does not match');
            return false;
        } else {
            setMatchStatus('Password matches now');
            return true;
        }
    }

    // Check password match whenever password or confirm changes
    useEffect(() => {
        check(); 
    }, [Confirm, password]);

    // Function to register the user
    const register = async (e) => {        
        e.preventDefault();
        try {
            if (!check()) { return }  // stop if passwords don't match
            setloading(true);

            // Create user in Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Send email verification
            await sendEmailVerification(user);
            alert("Verification email sent. Please check your inbox or spam/junk folder");
            setloading(false); 

        } catch (error) {
            alert("Signup failed: " + error.message); 
        }
        setloading(false);
    }

    return (
        <div>
            <Nav/>

            {/* Preloader while signing up */}
            <div>
                <h1 className={`loader ${loading ? "" : 'loaded'}`}><Preloader/></h1>
            </div>

            <div className='loginpage'>
                <div className='login'>
                    <form className='form' onSubmit={register} >

                        <h1>Create an account</h1>

                        {/* Email input */}
                        <section className='emailsection'>
                            <label htmlFor="emai">Email :</label>
                            <input id="emai" type='email' className='email' 
                            onChange={(e) => setemail(e.target.value)} />
                        </section>

                        {/* Password input */}
                        <section className='passwordsection'>
                            <label htmlFor='password'>Password : </label>
                            <input id="password" type='password' className='email' 
                            placeholder="********" onChange={(e) => setpassword(e.target.value)} />
                        </section>

                        {/* Confirm password input */}
                        <section className='passwordsection'>
                            <label htmlFor='confirm'>Confirm : </label>
                            <input id="confirm" type='password' className='email' 
                            placeholder="********" onChange={(e) => setconfirm(e.target.value)} />
                        </section>

                        {/* Submit button */}
                        <button type="submit" placeholder="Sign Up" className='button'>Register</button>

                        {/* Password match status and login link */}
                        <section className='doyouhave'>
                            <p className={`invalid ${Confirm === password ? 'valid' : ''}`}>{MatchStatus}</p>
                            <p>Do you have an account? <Link to="/login">Log in</Link></p>
                        </section>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
