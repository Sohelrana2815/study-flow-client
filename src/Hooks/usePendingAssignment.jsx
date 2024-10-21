import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosPublic from "./useAxiosPublic";

const usePendingAssignment = () => {
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: pendingAssignments = [], refetch } = useQuery({
    queryKey: ["pendingAssignment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/pendingAssignments?email=${user.email}`
      );
      return res.data;
    },
  });
  return [pendingAssignments, refetch];
};

export default usePendingAssignment;
