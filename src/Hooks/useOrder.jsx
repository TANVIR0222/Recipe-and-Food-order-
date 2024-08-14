import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOrder = () => {
    
    const axiosPublic = useAxiosPublic();

    const {data : order = [] , isPending: loading ,refetch} = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await axiosPublic.get('/order')
            return res.data;
        }
    })

    return[order,loading,refetch]
};

export default useOrder;