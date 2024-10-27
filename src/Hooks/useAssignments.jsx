import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAssignments = (difficultyLevel, currentPage, itemsPerPage) => {
  const axiosPublic = useAxiosPublic();
  const { data: assignments = [], refetch } = useQuery({
    queryKey: ["assignment", difficultyLevel, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/assignmentLevel?difficultyLevel=${difficultyLevel}&currentPage=${currentPage-1}&itemsPerPage=${itemsPerPage}`
      );
      return res.data;
    },
  });
  return [assignments, refetch];
};

export default useAssignments;
