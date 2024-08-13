import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async (error) => {
        const status = error.response.status;
        // for 401 or 403 logOut the user and move the user to login 
        if(status === 401 || status === 403){
             await logout();
            navigate('/singin')
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

  return axiosSecure;
};

export default useAxiosSecure;
