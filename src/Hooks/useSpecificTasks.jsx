import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSpecificTasks = () => {
  const axiosPublic = useAxiosPublic();
  const [specificTasks, setSpecificTasks] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const fetchSpecificTasks = async () => {
      try {
        const res = await axiosPublic.get(`/studyTasks?email=${user?.email}`);
        setSpecificTasks(res.data);
      } catch (error) {
        console.error("Error while fetching", error);
      }
    };
    fetchSpecificTasks();
  }, [axiosPublic, user?.email]);

  return [specificTasks];
};

export default useSpecificTasks;
