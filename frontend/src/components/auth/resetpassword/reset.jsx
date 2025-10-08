import React, { useState } from 'react'
import './reset.css'
import Nav from '../../home/nav/nav.jsx'
import { Link } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'

const Reset = () => {
    const [email, setemail] = useState(); // state to store user email input
    const navigate = useNavigate(); // navigation hook to redirect user

    // Function to send password reset email
    const getemail = async (e) => {
        e.preventDefault(); // prevent form default submission
        try {
            await sendPasswordResetEmail(auth, email); // send reset email
            alert("The email is sent to your inbox or spam folder!");
            navigate('/login'); // redirect to login page after success
        } catch (error) {
            alert(error.message); // show error if sending fails
            navigate('/login'); // redirect to login page even if error occurs
        }
    }

    return (
        <div>
            <Nav />
            <div className='loginpage'>
                <div className='login'>
                    <form className='form' onSubmit={getemail}>
                        <h1>Password Reset</h1>

                        {/* Email input section */}
                        <section className='emailsection'>
                            <label htmlFor="emai">Email :</label>
                            <input
                                id="emai"
                                type='email'
                                className='email'
                                onChange={(e) => setemail(e.target.value)} // update email state
                            />
                        </section>

                        <button type='submit'>
                            Get the email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reset
