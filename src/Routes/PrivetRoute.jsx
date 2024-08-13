import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <Spinner  className="mx-auto  flex mt-20" color="pink" aria-label="Pink spinner example" />
    }

    if(user){ 
        return children;
    }
    return <Navigate to={'/singin'} state={{form : location}} replace  ></Navigate>
};

export default PrivetRoute;