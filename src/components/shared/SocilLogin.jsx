import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import {useNavigate} from 'react-router-dom'

const SocilLogin = () => {
    const {googlelogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogle= () =>{
        googlelogin()
        .then(result => {
            console.log(result);
            const userInfo ={
                name:result.user?.displayName,
                email:result.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    } 
    return (
        <div className="mr-3">
            <button onClick={handleGoogle} className='w-full mt-5 border-gray-300 border-2 h-10 flex items-center justify-center ' ><FcGoogle className="text-2xl mr-3"></FcGoogle> Google</button>
        </div>
    );
};

export default SocilLogin;