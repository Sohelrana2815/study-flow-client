import { Helmet } from "react-helmet";
import useSubmittedAssignment from "../../Hooks/useSubmittedAssignment";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";

const MySubmittedAssignments = () => {
  const [submittedAssignments] = useSubmittedAssignment();
  if (!submittedAssignments.length) {
    return (
      <p className="text-[#091057] text-2xl mt-5 text-center font-serif dark:text-white">
        You don&apos;t submit any assignment.....
      </p>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        <Helmet>
          <title>My Submitted Assignment</title>
        </Helmet>
        {submittedAssignments.map((submittedAssignment) => (
          <SubmittedAssignmentCard
            key={submittedAssignment._id}
            submittedAssignment={submittedAssignment}
          />
        ))}
      </div>
    </>
  );
};

export default MySubmittedAssignments;
