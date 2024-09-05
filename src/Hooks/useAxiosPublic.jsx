import axios from "axios";

const axiosPublic = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3000/:",
=======
  baseURL: "https://raf-server-five.vercel.app/",
>>>>>>> 54031d8457c0823e96f6231347123a2790e7dbee
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
