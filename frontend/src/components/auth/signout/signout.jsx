import { signOut } from "firebase/auth";
import { auth } from '../firebase'

// Function to sign out the currently logged-in user
const SignOut = async () => {
    try {
        await signOut(auth); // call Firebase signOut method
        alert("You have signed out!"); // notify user of successful sign out
    } catch (error) {
        alert("Sign out error:", error.message); // handle any errors
    }
    return; // explicitly return (optional)
};

export default SignOut;
