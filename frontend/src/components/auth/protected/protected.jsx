import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Preloader from '../../preloader/preloader'
const ProtectedLayout = () => {
  const [user, loading] = useAuthState(auth);
  console.log("Auth state:", { user, loading });
  
  if (loading) return <div><Preloader/></div>;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />; // renders the nested routes
};

export default ProtectedLayout;
