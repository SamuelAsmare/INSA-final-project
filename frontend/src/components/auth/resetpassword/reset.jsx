import React from 'react'
import {useState} from 'react'
import './reset.css'
import Nav from '../../home/nav/nav.jsx'
import {Link } from 'react-router-dom'
import {sendPasswordResetEmail} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebase.js'
const Reset = ()=>{
     const [email , setemail] = useState();
     const navigate = useNavigate();

     const getemail = async(e)=>{
        e.preventDefault();
        try{
            await sendPasswordResetEmail(auth ,email);
            alert("the email is sent to your inbox or spam folder!!");
            navigate('/login')
            
        }catch(error){
            alert(error.message);
            navigate('/login')
        }  }  
        


    return(

        <div>
         <Nav/>
        <div className = 'loginpage'>
            <div className  = 'login'>
              <form 
              className = 'form'  
              onSubmit={getemail}>
                <h1>Password Reset </h1>


             <section 
               className = 'emailsection'>
                 <label 
                 htmlFor="emai">Email :</label>


                <input 
                id ="emai" 
                type = 'email'  
                className = 'email' 
                onChange = {(e)=>setemail(e.target.value)} />

             </section>  

                <button 
                type='submit'>
                    Get the email</button>
              </form>
            </div>
        </div>
        </div>

    )
}

export default  Reset