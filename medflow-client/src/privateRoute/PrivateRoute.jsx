import { Navigate, useLocation } from "react-router-dom";
// import FadeLoader  from "react-spinners/FadeLoader ";
import useAuth from "@/hooks/useAuth";
import { FadeLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <FadeLoader   color="#00B795" />
      </div>
    );
  }
  if (user) return children;

  return <Navigate to="/signin" state={location.pathname} replace={true} />;
};

export default PrivateRoute;