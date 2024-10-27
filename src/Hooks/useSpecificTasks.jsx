import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSpecificTasks = (priority) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email;
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task", email, priority],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/myStudyTasks?email=${email}&priority=${priority}`
      );
      return res.data;
    },
  });
  return [tasks, refetch];
};

export default useSpecificTasks;
