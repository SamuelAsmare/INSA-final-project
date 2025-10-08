import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Preloader from '../../preloader/preloader'

const ProtectedLayout = () => {
  // Get the current user and loading state from Firebase Auth
  const [user, loading] = useAuthState(auth);
  console.log("Auth state:", { user, loading });

  // Show loader while checking authentication state
  if (loading) return <div><Preloader/></div>;

  // If no user is logged in, redirect to login page
  if (!user) return <Navigate to="/login" replace />;

  // If authenticated, render nested routes
  return <Outlet />;
};

export default ProtectedLayout;
