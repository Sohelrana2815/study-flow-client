import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSpecificTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: task = [], refetch } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myStudyTasks?email=${user.email}`);
      return res.data;
    },
  });
  return [task, refetch];
};

export default useSpecificTasks;
