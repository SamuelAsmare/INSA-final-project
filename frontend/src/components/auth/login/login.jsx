import React from 'react'
import {useState} from 'react'
import './login.css'
import Nav from '../../home/nav/nav.jsx'
import {Link } from 'react-router-dom'
import {auth} from '../firebase.js'
import {signInWithEmailAndPassword , fetchSignInMethodsForEmail} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import Reset from '../resetpassword/reset.jsx'
import axios from 'axios'
import Preloader from "../../preloader/preloader.jsx"
const Login = ()=>{
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');
    const [loader,setloader] = useState(false);
    const navigate = useNavigate();
    const signin = async (e)=>{
                const online = navigator.onLine;
                e.preventDefault();
                if (!online){alert('please first connect to internet ');
                        return}
                setloader(true);
                const exist = await fetchSignInMethodsForEmail(auth,email);
                try{
                    const userCredential = await signInWithEmailAndPassword(auth,email,password);
                    const user = userCredential.user;     
                    if (!user.emailVerified) {
                                            alert("Please verify your email before logging in.");
                                            return;    } 
                navigate("/dashboard");
                await axios.post('https://task-manager-xg41.onrender.com/api/addusers',{email})
                
                }
                catch(error){
                    if(exist.length===0){alert("user doesnot exist");}
                    else if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
                    alert("Invalid email or password");
                    } else {
                            alert("Login failed: " + error.message);
                            } }     setloader(false);       }
    return(

        <div>
         <Nav/>

            <h1 className = {`preload ${loader?'preloading':""}`}><Preloader/></h1>
        <div className = 'loginpage'>
            <div className  = 'login'>
              <form className = 'form' onSubmit={signin}>
                <h1>Sign in to your account</h1>
             <section className = 'emailsection'>
                 <label htmlFor="emai">Email :</label>
                <input id ="emai" 
                type = 'email'  
                className = 'email' 
                onChange = {(e)=>setemail(e.target.value)} />
             </section>
            <section className = 'passwordsection'>
                   <label htmlFor = 'password'>Password : </label>
                   <input id = "password" 
                   type = 'password' 
                   className = 'email' 
                   placeholder="********" 
                   onChange = {(e)=>setpassword(e.target.value)}/>
            </section>   
        
                <button type='submit' id="login" className="button">log in</button>
            <section className = 'emailsection'>
                 <Link to="/reset" className = 'forgot'><p> Forgot password? </p></Link>
               <h3 > <Link to ='/signup' className = 'login-sign-up'>Sign up</Link></h3> 
            </section>
               
              </form>
            </div>
        </div>
        </div>

    )
}

export default  Login