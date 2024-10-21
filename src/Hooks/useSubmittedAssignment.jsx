import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosPublic from "./useAxiosPublic";

const useSubmittedAssignment = () => {
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: submittedAssignments = [], refetch } = useQuery({
    queryKey: ["submittedAssignment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/mySubmittedAssignment?email=${user.email}`
      );
      return res.data;
    },
  });

  return [submittedAssignments, refetch];
};

export default useSubmittedAssignment;
