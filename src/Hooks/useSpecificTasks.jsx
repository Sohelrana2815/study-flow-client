import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSpecificTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: task = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });
  return [task, refetch];
};

export default useSpecificTasks;
