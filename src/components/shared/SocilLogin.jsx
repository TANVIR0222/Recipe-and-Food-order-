import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

const SocilLogin = () => {
    const {googlelogin} = useAuth();
    const handleGoogle= () =>{
        googlelogin()
        .then(result => {
            console.log(result);
        })
    } 
    return (
        <div className="mr-3">
            <button onClick={handleGoogle} className='w-full mt-5 border-gray-300 border-2 h-10 flex items-center justify-center ' ><FcGoogle className="text-2xl mr-3"></FcGoogle> Google</button>
        </div>
    );
};

export default SocilLogin;