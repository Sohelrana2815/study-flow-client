import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAssignments = (difficultyLevel) => {
  const axiosPublic = useAxiosPublic();

  const { data: assignments = [], refetch } = useQuery({
    queryKey: ["assignment", difficultyLevel],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/assignments?difficultyLevel=${difficultyLevel}`
      );
      return res.data;
    },
  });
  return [assignments, refetch];
};

export default useAssignments;
