import React from 'react'
import {useState , useEffect} from 'react'
import './signup.css'
import Nav from '../../home/nav/nav'
import{ Link }from 'react-router-dom'
import { createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";
import { auth } from "../firebase.js";
import Preloader from '../../preloader/preloader.jsx'
const Signup=()=>{
    
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');
    const  [Confirm , setconfirm] = useState('');
    const [loading , setloading] = useState(false);
    const [MatchStatus, setMatchStatus]=useState('');   

    const check =()=>{
        if (Confirm==="" || password === ""){
            setMatchStatus('Please Fill both passsword field');
            return true}

        else if(Confirm!=password){
          setMatchStatus('password deos not match')
          return false }

       else{
         setMatchStatus('password matches now')
         return true  }     }

       useEffect(()=>{
          check(); },[Confirm ,password])
       const register = async(e)=>{        
            e.preventDefault();

        try{
            if (!check()){return}
            setloading(true);
            const userCredential = await createUserWithEmailAndPassword(auth , email , password);
            const user = userCredential.user;

            await sendEmailVerification(user);
            alert("Verification email sent. Please check your inbox or spam/junk folder");
            setloading(false); 

        }catch(error){alert( "sorry sam " + error.message); } 
            setloading(false);  }

    return(
        <div>
            <Nav/>
                <div>
                    <h1 className ={`loader ${loading?"":'loaded'}`}><Preloader/></h1>
                </div>
                <div className = 'loginpage'>
                    <div className  = 'login'>
                        <form className = 'form' onSubmit={register} >

                            <h1>Create an account</h1>


                                <section className = 'emailsection'>
                                    <label for="emai">Email :</label>
                                    <input id ="emai" type = 'email'  className = 'email' 
                                    onChange={(e)=>setemail(e.target.value)} />
                                </section>


                                <section className = 'passwordsection'>
                                    <label for = 'password'>Password : </label>
                                    <input id = "password" type = 'password' className = 'email' 
                                    placeholder="********" onChange={(e)=>setpassword(e.target.value)}/>
                                </section>


                                <section className = 'passwordsection'>
                                    <label for = 'confirm'>Confirm : </label>
                                    <input id = "confirm" type = 'password' className = 'email' 
                                    placeholder="********" onChange={(e)=>{setconfirm(e.target.value);}}/>
                                </section>


                                <button type = "submit" placeholder="Sign Up"  className = 'button'>Register</button>
                                <section className = 'doyouhave'>
                                    <p className = {`invalid ${Confirm===password?'valid':''}`}
                                    onChange = {(e)=>setMatchStatus(e.target.value)}>{MatchStatus} </p>
                                    <p >Do you have an account ? <Link to = "/login">Log in</Link></p>
                                </section>
                        
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Signup