import {signOut } from "firebase/auth";
import {auth} from '../firebase'
const SignOut = async () => {
    try{
      await signOut(auth)
      alert("You have signed out !");
    }catch(error){
      alert("Sign out error:", error.message)
    };
    return
};
export default SignOut