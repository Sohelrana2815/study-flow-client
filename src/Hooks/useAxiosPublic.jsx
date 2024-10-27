import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://study-flow-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
//http://study-flow-server.vercel.app/
// http://localhost:500