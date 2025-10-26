import { Navigate,useLocation } from "react-router-dom";
import useAuth from "./hook/useAuth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    if(!user){
       return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
    }
    return children
};

export default ProtectedRoute;