import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiosSecure = useAxiosSecure();
    // use anujai carts ar data loading kora hbe 
    const {user} = useAuth();
    // tan stack query
    const {refetch,data: cart= []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart,refetch]
};

export default useCarts;