import useSubmittedAssignment from "../../Hooks/useSubmittedAssignment";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";

const MySubmittedAssignments = () => {
  const [submittedAssignments] = useSubmittedAssignment();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
