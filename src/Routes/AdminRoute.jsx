import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const locations = useLocation();

    const [isAdmin , isAdminLoading] = useAdmin();
    
    if(loading || isAdminLoading){
        return <Spinner className="mx-auto mt-20" color="warning" aria-label="Warning spinner example" />
    }

    if(user || isAdmin) {
        return children
    }

    return  <Navigate to={'/'} state={{from : locations }} replace ></Navigate>
};

export default AdminRoute;